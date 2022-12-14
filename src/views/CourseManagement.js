import React, { useEffect, useState } from "react"
import { Button, Col, Container, Row } from 'reactstrap'
import CoursePicturebtn from "../components/CoursePictureBtn";
import CourseEditBtn from "../components/CourseEditBtn";
import StudentManageBtn from "../components/StudentManageBtn";
import NotificationBtn from "../components/NotificationBtn";
import SendNoti from "../components/SendNoti";
import { getCourse } from "../services/course.service";
import { useParams } from "react-router-dom";


const CourseManagement = () => {
    const [isOpen, setisOpen] = useState(false)
    const [courseid] = useParams();
    const [course, setcourse] = useState("");
    useEffect(() => {
        getCourse(courseid).then(
            res => setcourse(res.data.result)
        )
    }, [])

    return (
        <div className="course-manage">
            <div className="course-manage-title"> 
                <h1>Course Management</h1>
                <h4>{course.course_name}</h4>
            </div>
            <Container className='SchoolBox'>
                <Row className="course-manamge-menu" md={3} xs={2} xl={4} xxl={5}>
                    <Col className='border'><CoursePicturebtn /></Col>
                    <Col className='border'><CourseEditBtn /></Col>
                    <Col className='border'><StudentManageBtn /></Col>
                    <Col  onClick={() => setisOpen(true)} className='border'><NotificationBtn /></Col>
                </Row>
            </Container>
            <Button color="primary" className="delete-btn" size="lg">Delete Course</Button>   
            <SendNoti toggle={() => setisOpen(false)} isOpen={isOpen} label="New Push Notification"/>
        </div>
    )
}

export default CourseManagement;