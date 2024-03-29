import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import BackButton from "../components/BackButton";
import ClassroomManagementBtn from "../components/ClassroomManagementBtn";
import LogoBannerBtn from "../components/LogoBannerBtn";
import SchoolEditingBtn from "../components/SchoolEditingBtn";
import TeacherManagementBtn from "../components/TeacherManagementBtn";
import { startLoading, stopLoading } from "../redux/loading.reducer";
import { getSchool } from "../services/school.service";

const SchoolManagement = () => {
    const { schoolid } = useParams();
    const dispatch = useDispatch();
    const [school, setSchool] = useState({});

    useEffect(() => {
        dispatch(startLoading());
        getSchool(schoolid).then((response) => {
            dispatch(stopLoading());
            setSchool(response.data.result);
        });
    }, []);

    return (
        <div>
            <div className="MySchoolTitle">
                <h1>SchoolManagement</h1>
                <h5>{school.name}</h5>
            </div>
            <div className="schoolcards">
                <Container className="SchoolBox">
                    <Row
                        className="school-manage-menu"
                        md={3}
                        xs={2}
                        xl={4}
                        xxl={5}
                    >
                        <Col className="border">
                            <LogoBannerBtn school={school} />
                        </Col>
                        <Col className="border">
                            <SchoolEditingBtn school={school} />
                        </Col>
                        <Col className="border">
                            <TeacherManagementBtn school={school} />
                        </Col>
                        <Col className="border">
                            <ClassroomManagementBtn school={school} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="flex justify-center mt-10">
                <BackButton size="lg w-1/4">Back</BackButton>
            </div>
        </div>
    );
};

export default SchoolManagement;
