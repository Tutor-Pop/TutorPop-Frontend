// import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Col, Row } from "reactstrap"

const EditingCourse = () => {
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
                {/* <div className="Bar">
                    <select class="selectpicker">
                        <option>Edu</option>
                        <option>Music</option>
                        <option>Food</option>
                        <option>Sport</option>
                        <option>Shit</option>
                        <option>Jittat</option>
                    </select>
                </div> */}
                <div className="Prob">
                    ***เป็น select ที่ search ได้***
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
                    <div className="Prob">
                        ***เป็น chip ที่ลบออกได้ เพิ่มได้สำหรับอาจารย์***
                    </div>
                    {/* <div class="teacher_frame">
                        <div class="chip">
                            <img src="Faii.jpg" alt="Person" width="96" height="96" />
                            Wimon Manee
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            <img src="Nina.jpg" alt="Person" width="96" height="96" />
                            Nina Hum
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            <img src="Nun.png" alt="Person" width="96" height="96" />
                            Nun HarnPed
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            <img src="Tul.png" alt="Person" width="96" height="96" />
                            Tul Tura
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            <img src="Nun1.png" alt="Person" width="96" height="96" />
                            Nun ButHumBid
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <img src="data:image/png;base64,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" width="96" height="96" class="add_user" alt="Add teacher" />
                    </div> */}
                </div>
            </div>
            <div className="Element">
                <div className="FontText">Reservation period</div>
                <div class="Prob">
                    **เป็น select ที่สามารถเลือวันในปฎิธินได้ว่าจะเริ่มวันไหน จบวันไหน**
                </div>
            </div>
            <div className="Element">
                <div className="FontText">Course open-close date</div>
                <div class="Prob">
                    **เป็น select ที่สามารถเลือวันในปฎิธินได้ว่าจะเริ่มวันไหน จบวันไหน**
                </div>
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
                <div class="Prob">
                    **เป็น select ที่ search ได้**
                </div>
            </div>
            <div className="Element">
                <div className="FontText">Teaching schdule</div>
                <div class="Prob">
                    **เป็น select ที่สามารถเลือวันในปฎิธินได้ว่าจะเริ่มวันไหน จบวันไหน**
                </div>
            </div>
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
                            Save
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

export default EditingCourse