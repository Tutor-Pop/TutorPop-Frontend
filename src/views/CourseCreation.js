// import "bootstrap/dist/css/bootstrap.min.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"
import { startLoading, stopLoading } from "../redux/loading.reducer";
import { getAllRooms } from "../services/room.service";
import { getSchool } from "../services/school.service";

const CourseCreation = () => {

    const dispatch = useDispatch()

    const [schoolName, setSchoolName] = useState('') 
    const [duplicate, setduplicate] = useState([0])
    const [allClassrooms, setAllClassrooms] = useState([])
    const [isNumberEmpty, setIsNumberEmpty] = useState(true)
    const [numberStudents, setNumberStudents] = useState(0)

    const { schoolid } = useParams()
    
    useEffect(() => {
        dispatch(startLoading())
        getSchool(schoolid)
        .then( (response) => {
            setSchoolName(response.data.result.name)
            return getAllRooms(schoolid)
        })
        .then( (response) => {
            dispatch(stopLoading())
            setAllClassrooms(response.data.result)
        })
    }, [])

    const handleOnChange = (e) => {
        console.log(e.target.value)
        if (e.target.value === '' || e.target.value === NaN || e.target.value == 0) {
            setIsNumberEmpty(true)
            setNumberStudents(0)
            return
        } 
        setIsNumberEmpty(false)
        setNumberStudents(e.target.value)
    }

    return (
        <div className="CourseCreation">
            <h1>Create new course</h1>
            <div className="Element">
                <div className="FontText">School : {schoolName}</div>
            </div>
            <Form>
            <div className="Element">
                <div className="FontText">Course name</div>
                <div className="Bar">
                    <input type="text" class="form-control" id="course_name_bar" />
                </div>
            </div>
            <div className="Element">
                <div className="FontText">Category</div>
                <div className="Bar">
                    <Select
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
                    <textarea class="form-control" rows="6"></textarea>
                </div>
            </div>
            <div className="Element">
                <div class="teacher">
                    <div class="FontText">Add teacher</div>
                    <Select
                        isMulti
                        name="colors"
                        options={[{ value: 'ocean', label: 'Ocean', isFixed: true },
                        { value: 'blue', label: 'Blue', isDisabled: true },
                        { value: 'purple', label: 'Purple' },
                        { value: 'red', label: 'Red', isFixed: true },
                        { value: 'orange', label: 'Orange' },
                        { value: 'yellow', label: 'Yellow' },
                        { value: 'green', label: 'Green' },
                        { value: 'forest', label: 'Forest' },
                        { value: 'slate', label: 'Slate' },
                        { value: 'silver', label: 'Silver' },]}
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
                                            id="exampleDate"
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
                                            id="exampleDate"
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
                                            id="exampleDate"
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
                                            id="exampleDate"
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
                                            id="exampleDate"
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
                                            id="exampleDate"
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
                            <div className="FontText">Course close date</div>
                        </Row>
                        <Row>
                            <Col>
                                <div className='Bar'>
                                    <FormGroup>
                                        <Input
                                            id="exampleDate"
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
                                            id="exampleDate"
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
                <div className="FontText">Course period (number of hours)</div>
                <div className="Bar">
                    <input min='0' type="Number" class="form-control" id="course_name_bar" />
                </div>
            </div>
            <div className="Element">
                <div className="FontText">Number of student</div>
                <div className="Bar">
                    <input onChange={handleOnChange} min='0' type="Number" class="form-control" id="course_name_bar" />
                </div>
            </div>
            <div className="Element">
                <div className="FontText">Classroom</div>
                <div className="Bar">
                    <Select
                        isDisabled={isNumberEmpty}
                        placeholder="Select Classroom"
                        options={
                            allClassrooms
                            .filter((room) => (Number(room.maximum_seat) >= Number(numberStudents)))
                            .map((room) => (
                                { value : room.room_name, label: (room.room_name + ' (Max Students : '+ room.maximum_seat + ')') }
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
                                    id="exampleDate"
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
                                    id="exampleDate"
                                    name="date"
                                    placeholder="date placeholder"
                                    type="date"
                                    />
                            </FormGroup>
                        </div>
                    </Col>
                    <Col>
                        <div className="AddOne">
                            {i === duplicate.length - 1 ?
                                <Button onClick={() => setduplicate([...duplicate, 0])} className="w-1/2 plus" color="success">
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button> :
                                <Button onClick={() => setduplicate([...duplicate.slice(0, i), 1, ...duplicate.slice(i + 1)])} className="w-1/2 negative" color="danger">
                                    <FontAwesomeIcon icon={faMinus} />
                                </Button>}
                        </div>
                    </Col>
                </Row>
            </div>)}

            <div className="Element">
                <div className="FontText">Course price</div>
                <div className="Bar">
                    <input type="text" class="form-control" id="course_name_bar" />
                </div>
            </div>
            <div className="Element">
                <div className="FontText">Bank, account name, account number</div>
                <div className="Bar">
                    <textarea class="form-control" rows="6"></textarea>
                </div>
            </div>
            <div className="Element">
                <div className="FontText">QR code payment</div>
                <div class="Prob">
                    **ทำช่อง payment**
                </div>
            </div>
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
    // http://localhost:3000/create-course/:schoolid
}
export default CourseCreation