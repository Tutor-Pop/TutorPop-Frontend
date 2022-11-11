// import "bootstrap/dist/css/bootstrap.min.css";


import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Select from "react-select";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap"

const CourseCreation = () => {
    const [duplicate, setduplicate] = useState([0])
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className="CourseCreation">
            <h1>Create new course</h1>
            <div className="Element">
                <div className="FontText">Academy name</div>
                <div className="Bar">
                    <input type="text" class="form-control" id="course_name_bar" />
                </div>
            </div>
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
                    <input type="text" class="form-control" id="course_name_bar" />
                </div>
            </div>
            <div className="Element">
                <div className="FontText">Number of student</div>
                <div className="Bar">
                    <input type="text" class="form-control" id="course_name_bar" />
                </div>
            </div>
            <div className="Element">
                <div className="FontText">Classroom</div>
                <div className="Bar">
                    <Select
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
                    />
                </div>
            </div>

            {duplicate.map((v, i) => <div key={i} className="Element">
                <div className="FontText"> Teacher Schedule</div>
                <Row>
                    <Col>
                        <div className="Bar">
                            <Select placeholder="Day..."
                                options={[{ value: 'Sun', label: 'Sun' },
                                { value: 'Mon', label: 'Mon' },
                                { value: 'Tue', label: 'Tue' },
                                { value: 'Wed', label: 'Wed' },
                                { value: 'Thu', label: 'Thur' },
                                { value: 'Fri', label: 'Fri' },
                                { value: 'Sat', label: 'Sat' }]}
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
                            <Button onClick={() => setduplicate([...duplicate, 0])} color="primary" className="w-1/2">
                                <FontAwesomeIcon icon={faPlus}/>
                            </Button>
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
        </div>
    )
    // http://localhost:3000/create-course/:schoolid
}
export default CourseCreation