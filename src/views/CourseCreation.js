// import "bootstrap/dist/css/bootstrap.min.css";
import { faL, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Upload from "../components/Upload";
import { BACKEND_URL } from "../constants/service.constant";
import { emitError, emitSuccess } from "../functions/toastify.function";
import { startLoading, stopLoading } from "../redux/loading.reducer";
import { createCourse, uploadPaymentMethod } from "../services/course.service";
import { getSchoolOwner } from "../services/personal.service";
import { getAllRooms } from "../services/room.service";
import { getSchool, getSchoolDetail, getTeacher } from "../services/school.service";

const CourseCreation = () => {
    const dispatch = useDispatch();
    const schoolid = 1;

    const [schoolName, setSchoolName] = useState("");
    const [duplicate, setduplicate] = useState([0]);
    const [allClassrooms, setAllClassrooms] = useState([]);
    const [isNumberEmpty, setIsNumberEmpty] = useState(true);
    const [numberStudents, setNumberStudents] = useState(0);
    const [allTeachers, setAllTeachers] = useState([]);
    const [ownedSchool, setownedSchool] = useState([])
    const [schoolOptions, setschoolOptions] = useState([])

    const [loadingSchool,setloadingSchool] = useState(false)
    const [addTeacherOptions,setaddTeacherOptions] = useState([])
    const [selectRoomOptions,setselectRoomOptions] = useState([])

    const [selectedSchool,setselectedSchool] = useState(null)
    const [courseType, setcourseType] = useState(null);
    const [teacher, setTeacher] = useState([]);
    const [classroom, setClassroom] = useState([]);
    const [studyTime, setStudyTime] = useState([
        {
            day: null,
            start_time: null,
            end_time: null,
        },
    ]);

    useEffect(() => {
        dispatch(startLoading());
        getSchool(schoolid)
            .then((response) => {
                setSchoolName(response.data.result.name);
                return getAllRooms(schoolid);
            })
            .then((response) => {
                setAllClassrooms(response.data.result);
                return getTeacher(schoolid);
            })
            .then((response) => {
                setAllTeachers(response.data.teachers);
                return getSchoolOwner(localStorage.getItem('account_id'))
            })
            .then((response) => {
                setownedSchool(response.data.schools)
                dispatch(stopLoading());
            })
    }, []);

    useEffect(() => {
        if(selectedSchool){
            setloadingSchool(true)
            getSchoolDetail(selectedSchool.value).then(response => {
                setaddTeacherOptions(response.data.all_teachers.teachers.map(teacher => ({
                    value: teacher.account_id,
                    label: (
                        <div className="d-flex">
                            <img
                                width={23}
                                height={23}
                                className="mr-2 rounded-full"
                                src={teacher.profile_picture ? `${BACKEND_URL}/media/${teacher.profile_picture}` : require("../img/user.png")}
                            />
                            <span>{teacher.username} ({teacher.firstname} {teacher.lastname})</span> 
                        </div>
                    )
                })))
                return getAllRooms(selectedSchool.value).then(response => {
                    setselectRoomOptions(response.data.result.map(room => ({
                        value: room.room_id,
                        label: <>{room.room_name} (Max Students : {room.maximum_seat})</>
                    })))
                    setloadingSchool(false)
                })
            })
        }
        setTeacher([])
        setClassroom([])
    }, [selectedSchool])

    useEffect(() => {
        setschoolOptions(ownedSchool.filter(school => school.status === "Confirmed").map(school => ({
            value: school.school_id,
            label: (
                <div className="d-flex">
                    <img
                        width={23}
                        height={23}
                        className="mr-2 rounded-full"
                        src={school.logo_pic != "" ? `${BACKEND_URL}/media/${school.logo_pic}` : require("../img/school.png")}
                    />
                    {school.name}
                </div>
            ),
            disable: true
        })))
    }, [ownedSchool])

    const addStudyTime = (i) => {
        setduplicate([...duplicate, 0]);
        setStudyTime([
            ...studyTime,
            {
                day: null,
                start_time: null,
                end_time: null,
            },
        ]);
    };

    const removeStudyTime = (i) => {
        setduplicate([...duplicate.slice(0, i), 1, ...duplicate.slice(i + 1)]);
    };

    const handleTSDay = (e, i) => {
        setStudyTime([
            ...studyTime.slice(0, i),
            { ...studyTime[i], day: e.value },
            ...studyTime.slice(i + 1),
        ]);
    };

    const handleTSStartTime = (e, i) => {
        setStudyTime([
            ...studyTime.slice(0, i),
            { ...studyTime[i], start_time: e.target.value },
            ...studyTime.slice(i + 1),
        ]);
    };

    const handleTSEndTime = (e, i) => {
        setStudyTime([
            ...studyTime.slice(0, i),
            { ...studyTime[i], end_time: e.target.value },
            ...studyTime.slice(i + 1),
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("TARGET",e.target)

        // console.log(Number(localStorage.getItem("account_id")))
        // console.log(e.target["name"].value)
        // console.log(courseType)
        // console.log(Number(classroom.value))
        // console.log(e.target["description"].value)
        // console.log(`${e.target["reserve-open-date"].value} ${e.target["reserve-open-time"].value}:00+00`)
        // console.log(`${e.target["reserve-close-date"].value} ${e.target["reserve-close-time"].value}:00+00`)
        // console.log(e.target["course-start-date"].value)
        // console.log(e.target["course-end-date"].value)
        // console.log(Number(e.target["course-period"].value))
        // console.log(Number(e.target["course-price"].value))
        // console.log(Number(e.target["number-student"].value))
        // console.log(e.target["payment-text"].value)
        // console.log(studyTime.filter((v, i) => duplicate[i] == 0))
        // console.log(teacher)

        let body = {
            owner_id: Number(localStorage.getItem("account_id")),
            course_name: e.target["name"].value,
            type: courseType,
            room_id: Number(classroom.value),
            course_description: e.target["description"].value,
            reserve_open_date: `${e.target["reserve-open-date"].value} ${e.target["reserve-open-time"].value}:00+00`,
            reserve_close_date: `${e.target["reserve-close-date"].value} ${e.target["reserve-close-time"].value}:00+00`,
            start_date: e.target["course-start-date"].value,
            end_date: e.target["course-end-date"].value,
            course_period: Number(e.target["course-period"].value),
            course_price: Number(e.target["course-price"].value),
            maximum_student: Number(e.target["number-student"].value),
            payment_method_text: e.target["payment-text"].value,
            study_time: studyTime.filter((v, i) => duplicate[i] == 0),
            teachers: teacher.map(t => t.value),
        };

        console.log(body);
        // console.log(e.target["payment-picture"].files[0]);

        let formData = new FormData();
        formData.append(
            "payment_method_pic",
            e.target["payment-picture"].files[0]
        );
        console.log(selectedSchool.value)

        dispatch(startLoading());
        createCourse(selectedSchool.value, body)
            .then((response) => {
                return uploadPaymentMethod(
                    response.data.result.course_id,
                    formData
                );
            })
            .then((response) => {
                emitSuccess("Your course has been created!");
                dispatch(stopLoading());
            })
            .catch((err) => {
                dispatch(stopLoading());
                emitError("Something went wrong! Please try again.");
                console.log(err);
            });
    };

    return (
        <div className="course-creation mb-10">
            <h1>Create New Course</h1>
            <Form onSubmit={e => handleSubmit(e)}>
                <FormGroup>
                    <Label>School</Label>
                    <Select
                        onChange={(e) => setselectedSchool(e)}
                        options={schoolOptions}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label>Add Teacher</Label>
                    <Select

                        // required
                        onChange={(e) => setTeacher(e)}
                        value={teacher}
                        placeholder="Select Teacher"
                        isDisabled={loadingSchool}
                        isMulti
                        // options={allTeachers.map((teacher) => ({
                        //     value: teacher.account_id,
                        //     label: teacher.firstname + " " + teacher.lastname,
                        // }))}
                        options={addTeacherOptions}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Classroom</Label>
                    <Select
                        onChange={(e) => setClassroom(e)}
                        value={classroom}
                        isDisabled={loadingSchool}
                        placeholder="Select Classroom"
                        options={selectRoomOptions}
                    />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label>Course Name</Label>
                    <Input type="text" id="name" />
                </FormGroup>
                <FormGroup>
                    <Label>Category</Label>
                    <Select
                        // required
                        onChange={(e) => setcourseType(e.value)}
                        options={[
                            { value: "GENERAL", label: "General" },
                            { value: "MATH", label: "Math" },
                            { value: "SCIENCE", label: "Science" },
                            { value: "LANGUAGE", label: "Language" },
                            { value: "MUSIC", label: "Music" },
                            { value: "COOK", label: "Cooking" },
                            { value: "FINANCE", label: "Finance" },
                        ]}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Course Description</Label>
                    <Input type="textarea" id="description" />
                </FormGroup>
                
                <Row>
                    <Col>
                        <Label>Reserve Open Date</Label>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Input
                                        // required
                                        id="reserve-open-date"
                                        placeholder="date placeholder"
                                        type="date"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Input
                                        // required
                                        id="reserve-open-time"
                                        placeholder="date placeholder"
                                        type="time"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Label>Reserve Close Date</Label>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Input
                                        // required
                                        id="reserve-close-date"
                                        placeholder="date placeholder"
                                        type="date"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Input
                                        // required
                                        id="reserve-close-time"
                                        placeholder="date placeholder"
                                        type="time"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Course Open Date</Label>
                            <FormGroup>
                                <Input
                                    // required
                                    id="course-start-date"
                                    placeholder="date placeholder"
                                    type="date"
                                />
                            </FormGroup>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Course Close Date</Label>
                            <FormGroup>
                                <Input
                                    // required
                                    id="course-end-date"
                                    placeholder="date placeholder"
                                    type="date"
                                />
                            </FormGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Course period (Number Of Hours)</Label>
                    <Input type="number" id="course-period" />
                </FormGroup>
                <FormGroup>
                    <Label>Number Of student</Label>
                    <Input type="number" id="number-student" />
                </FormGroup>
                

                <div>
                    <Label>Teacher Schedule</Label>
                    {duplicate.map((v, i) => (
                        <div
                            key={i}
                            className={duplicate[i] ? "d-none" : "Element"}
                        >
                            <Row>
                                <Col>
                                    <div className="Bar">
                                        <Select
                                            placeholder="Day..."
                                            // required
                                            onChange={(e) => handleTSDay(e, i)}
                                            options={[
                                                {
                                                    value: "SUN",
                                                    label: "Sunday",
                                                },
                                                {
                                                    value: "MON",
                                                    label: "Monday",
                                                },
                                                {
                                                    value: "TUE",
                                                    label: "Tuesday",
                                                },
                                                {
                                                    value: "WED",
                                                    label: "Wednesday",
                                                },
                                                {
                                                    value: "THU",
                                                    label: "Thursday",
                                                },
                                                {
                                                    value: "FRI",
                                                    label: "Friday",
                                                },
                                                {
                                                    value: "SAT",
                                                    label: "Saturday",
                                                },
                                            ]}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="Bar">
                                        <FormGroup>
                                            <Input
                                                // required
                                                onChange={(e) =>
                                                    handleTSStartTime(e, i)
                                                }
                                                id="exampleDate"
                                                name="time"
                                                placeholder="date placeholder"
                                                type="time"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="Bar">
                                        <FormGroup>
                                            <Input
                                                // required
                                                onChange={(e) =>
                                                    handleTSEndTime(e, i)
                                                }
                                                id="exampleDate"
                                                name="time"
                                                placeholder="date placeholder"
                                                type="time"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="AddOne">
                                        {i === duplicate.length - 1 ? (
                                            <Button
                                                onClick={() => addStudyTime(i)}
                                                className="w-1/2 plus"
                                                color="success"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                />
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={() =>
                                                    removeStudyTime(i)
                                                }
                                                className="w-1/2 negative"
                                                color="danger"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faMinus}
                                                />
                                            </Button>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
                <FormGroup>
                    <Label>Course Price</Label>
                    <Input type="number" id="course-price" />
                </FormGroup>
                <FormGroup>
                    <Label>Bank, Account Name, Account Number</Label>
                    <Input type="textarea" id="payment-text" />
                </FormGroup>
                <FormGroup>
                    <Label>QR Code Payment</Label>
                    <Input type="file" id="payment-picture" />
                </FormGroup>
                <div className="mx-auto w-1/2">
                    <Button
                        type="submit"
                        color="primary"
                        size="lg"
                        className="Pair_Button mr-10"
                    >
                        Create course
                    </Button>
                    <Button
                        type="submit"
                        color="secondary"
                        size="lg"
                        className="Pair_Button"
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
    // http://localhost:3000/create-course/:schoolid
};
export default CourseCreation;
