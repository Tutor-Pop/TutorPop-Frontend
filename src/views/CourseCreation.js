// import "bootstrap/dist/css/bootstrap.min.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"
import Upload from "../components/Upload";
import { emitError, emitSuccess } from "../functions/toastify.function";
import { startLoading, stopLoading } from "../redux/loading.reducer";
import { createCourse, uploadPaymentMethod } from "../services/course.service";
import { getAllRooms } from "../services/room.service";
import { getSchool, getTeacher } from "../services/school.service";

const CourseCreation = () => {

    const dispatch = useDispatch()
    const { school_id } = useParams()

    const [schoolName, setSchoolName] = useState('')
    const [duplicate, setduplicate] = useState([0])
    const [allClassrooms, setAllClassrooms] = useState([])
    const [isNumberEmpty, setIsNumberEmpty] = useState(true)
    const [numberStudents, setNumberStudents] = useState(0)
    const [allTeachers, setAllTeachers] = useState([])

    const [courseType, setcourseType] = useState(null)
    const [teacher, setTeacher] = useState([])
    const [classroom, setClassroom] = useState([])
    const [studyTime, setStudyTime] = useState([{
        day: null,
        start_time: null,
        end_time: null,
    }])

    useEffect(() => {
        dispatch(startLoading())
        getSchool(school_id)
            .then((response) => {
                setSchoolName(response.data.result.name)
                return getAllRooms(school_id)
            })
            .then((response) => {
                console.log(response.data)
                setAllClassrooms(response.data.result)
                return getTeacher(school_id)
            })
            .then((response) => {
                dispatch(stopLoading())
                setAllTeachers(response.data.teachers)
            })
    }, [])

    const addStudyTime = (i) => {
        setduplicate([...duplicate, 0])
        setStudyTime([...studyTime, {
            day: null,
            start_time: null,
            end_time: null,
        }])
    }

    const removeStudyTime = (i) => {
        setduplicate([...duplicate.slice(0, i), 1, ...duplicate.slice(i + 1)])
    }

    const handleTSDay = (e, i) => {
        setStudyTime([...studyTime.slice(0, i), { ...studyTime[i], day: e.value }, ...studyTime.slice(i + 1)])
    }

    const handleTSStartTime = (e, i) => {
        setStudyTime([...studyTime.slice(0, i), { ...studyTime[i], start_time: e.target.value }, ...studyTime.slice(i + 1)])
    }

    const handleTSEndTime = (e, i) => {
        setStudyTime([...studyTime.slice(0, i), { ...studyTime[i], end_time: e.target.value }, ...studyTime.slice(i + 1)])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let body = {
            owner_id: Number(localStorage.getItem('account_id')),
            course_name: e.target['course-name'].value,
            type: courseType,
            room_id: Number(classroom.value),
            course_description: e.target['description'].value,
            reserve_open_date: `${e.target['reserve-open-date'].value} ${e.target['reserve-open-time'].value}:00+00`,
            reserve_close_date: `${e.target['reserve-close-date'].value} ${e.target['reserve-close-time'].value}:00+00`,
            start_date: e.target['course-start-date'].value,
            end_date: e.target['course-end-date'].value,
            course_period: Number(e.target['course-period'].value),
            course_price: Number(e.target['course-price'].value),
            maximum_student: Number(e.target['number-student'].value),
            payment_method_text: e.target['payment-text'].value,
            study_time: studyTime.filter((v, i) => duplicate[i] == 0),
            teachers: teacher
        }

        console.log(body)
        console.log(e.target['payment-picture'].files[0])

        let formData = new FormData()
        formData.append('payment_method_pic',e.target['payment-picture'].files[0])


        dispatch(startLoading())
        createCourse(school_id,body).then(response => {
            // console.log(response.d)
            return uploadPaymentMethod(response.data.result.course_id,formData)            
        }).then(response => {
            emitSuccess("Your course has been created!")
            dispatch(stopLoading())
        }).catch(err => {
            dispatch(stopLoading())
            emitError("มึงผิด")
            console.log(err)
        })

        // let formData = new FormData()
        // formData.append('')

        // console.log(body)
    }

    return (
        <div className="course-creation">
            <h1>Create new course</h1>
            <div className="Element">
                <div className="FontText">School : {schoolName}</div>
            </div>
            <Form onSubmit={handleSubmit}>
                <div className="Element">
                    <div className="FontText">Course name</div>
                    <div className="Bar">
                        <FormGroup>
                            <Input
                                required
                                id="course-name"
                                name="course_name_bar"
                                type="text"
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="Element">
                    <div className="FontText">Category</div>
                    <div className="Bar">
                        <Select
                        required
                            onChange={e => setcourseType(e.value)}
                            options={[
                                { value: 'GENERAL', label: 'General' },
                                { value: 'MATH', label: 'Math' },
                                { value: 'SCIENCE', label: 'Science' },
                                { value: 'LANGUAGE', label: 'Language' },
                                { value: 'MUSIC', label: 'Music' },
                                { value: 'COOK', label: 'Cooking' },
                                { value: 'FINANCE', label: 'Finance' },]}
                        />
                    </div>
                </div>
                <div className="Element">
                    <div className="FontText">Course description</div>
                    <div className="Bar">
                        <textarea id="description" class="form-control" rows="6"></textarea>
                    </div>
                </div>
                <div className="Element frame">
                    <div className="course-create-teacher">
                        <div className="FontText">Add teacher</div>
                        <Select
                        required
                            onChange={e => setTeacher(e)}
                            isMulti
                            name="colors"
                            options={
                                allTeachers.map((teacher) => (
                                    { value: teacher.account_id, label: (teacher.firstname + ' ' + teacher.lastname) }
                                ))
                            }
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                </div>
                <div className="Element">
                    <Row>
                        <Col>
                            <Row>
                                <div className="FontText">Reserve open date</div>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='Bar'>
                                        <FormGroup>
                                            <Input
                                            required
                                                id="reserve-open-date"
                                                name="date"
                                                placeholder="date placeholder"
                                                type="date"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='Bar'>
                                        <FormGroup>
                                            <Input
                                            required
                                                id="reserve-open-time"
                                                name="time"
                                                placeholder="date placeholder"
                                                type="time"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <div className="FontText">Reserve close date</div>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='Bar'>
                                        <FormGroup>
                                            <Input
                                            required
                                                id="reserve-close-date"
                                                name="date"
                                                placeholder="date placeholder"
                                                type="date"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='Bar'>
                                        <FormGroup>
                                            <Input
                                            required
                                                id="reserve-close-time"
                                                name="time"
                                                placeholder="date placeholder"
                                                type="time"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="Element">
                    <Row>
                        <Col>
                            <Row>
                                <div className="FontText">Course open date</div>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='Bar'>
                                        <FormGroup>
                                            <Input
                                            required
                                                id="course-start-date"
                                                name="date"
                                                placeholder="date placeholder"
                                                type="date"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col>
                                {/* <Col>
                                    <div className='Bar'>
                                        <FormGroup>
                                            <Input
                                                id="exampleDate"
                                                name="time"
                                                placeholder="date placeholder"
                                                type="time"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col> */}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <div className="FontText">Course close date</div>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='Bar'>
                                        <FormGroup>
                                            <Input
                                            required
                                                id="course-end-date"
                                                name="date"
                                                placeholder="date placeholder"
                                                type="date"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col>
                                {/* <Col>
                                    <div className='Bar'>
                                        <FormGroup>
                                            <Input
                                                id="exampleDate"
                                                name="time"
                                                placeholder="date placeholder"
                                                type="time"
                                            />
                                        </FormGroup>
                                    </div>
                                </Col> */}
                            </Row>
                        </Col>
                    </Row>
                </div>
                <FormGroup>
                    <div className="Element">
                        <div className="FontText">Course period (number of hours)</div>
                        <div className="Bar">
                            <Input
                            required
                                id="course-period"
                                name="course_name_bar"
                                type="text"
                            />
                        </div>
                    </div>
                </FormGroup>
                <div className="Element">
                    <div className="FontText">Number of student</div>
                    <div className="Bar">
                        <Input
                            id="number-student"
                            name="course_name_bar"
                            type="text"
                        />
                    </div>
                </div>
                <div className="Element">
                    <div className="FontText">Classroom</div>
                    <div className="Bar">
                        <Select
                            // isDisabled={isNumberEmpty}
                            onChange={e => setClassroom(e)}
                            placeholder="Select Classroom"
                            options={
                                allClassrooms
                                    .filter((room) => (Number(room.maximum_seat) >= Number(numberStudents)))
                                    .map((room) => (
                                        { value: room.room_id, label: (room.room_name + ' (Max Students : ' + room.maximum_seat + ')') }
                                    ))
                            }
                        />
                    </div>
                </div>

                {duplicate.map((v, i) => <div key={i} className={duplicate[i] ? "d-none" : "Element"}>
                    <div className="FontText"> Teacher Schedule</div>
                    <Row>
                        <Col>
                            <div className="Bar">
                                <Select placeholder="Day..."
                                    required
                                    onChange={(e) => handleTSDay(e, i)}
                                    options={[{ value: 'SUN', label: 'Sunday' },
                                    { value: 'MON', label: 'Monday' },
                                    { value: 'TUE', label: 'Tuesday' },
                                    { value: 'WED', label: 'Wednesday' },
                                    { value: 'THU', label: 'Thursday' },
                                    { value: 'FRI', label: 'Friday' },
                                    { value: 'SAT', label: 'Saturday' }]}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='Bar'>
                                <FormGroup>
                                    <Input
                                        required
                                        onChange={(e) => handleTSStartTime(e, i)}
                                        id="exampleDate"
                                        name="time"
                                        placeholder="date placeholder"
                                        type="time"
                                    />
                                </FormGroup>
                            </div>
                        </Col>
                        <Col>
                            <div className='Bar'>
                                <FormGroup>
                                    <Input
                                        required
                                        onChange={(e) => handleTSEndTime(e, i)}
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
                                {i === duplicate.length - 1 ?
                                    <Button onClick={() => addStudyTime(i)} className="w-1/2 plus" color="success">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button> :
                                    <Button onClick={() => removeStudyTime(i)} className="w-1/2 negative" color="danger">
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>}
                            </div>
                        </Col>
                    </Row>
                </div>)}

                <FormGroup>

                    <div className="Element">
                        <div className="FontText">Course price</div>
                        <div className="Bar">
                            <Input
                                id="course-price"
                                name="course_name_bar"
                                type="text"
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormGroup>

                    <div className="Element">
                        <div className="FontText">Bank, account name, account number</div>
                        <div className="Bar">
                            <Input
                                id="payment-text"
                                name="course_name_bar"
                                type="textarea"
                            />
                        </div>
                    </div>
                </FormGroup>
                <FormGroup>

                <div className="Element">
                    <div className="FontText">QR code payment</div>
                    {/* <Upload id="payment-picture" /> */}
                </div>
                </FormGroup>
                <FormGroup>
                    <Input type="file" id="payment-picture"/>
                </FormGroup>
                <div className="temp">
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Button type="submit" color="primary" size="lg" className="Pair_Button">
                                Create course
                            </Button>
                        </Col>
                        <Col>
                            <Button type="submit" color="secondary" size="lg" className="Pair_Button">
                                Cancel
                            </Button>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
    // http://localhost:3000/create-course/:school_id
}
export default CourseCreation