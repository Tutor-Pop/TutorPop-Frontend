import React, { useEffect, useState } from "react";
import SearchTeacherBar from "../components/SearchTeacherBar";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { Button, Col, Container, Row } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    getTeacher,
    getSchool,
    updateTeacher,
    deleteTeacher,
} from "../services/school.service";
import LinkButton from "../components/LinkButton";
import BackButton from "../components/BackButton";
import Select from "react-select";
import { getAllAccounts } from "../services/account.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import ToggleChip from "../components/ToggleChip";
import ProfileCard from "../components/ProfileCard";
import { emitError, emitSuccess } from "../functions/toastify.function";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../redux/loading.reducer";
import { BACKEND_URL } from "../constants/service.constant";

const TeacherManagement = () => {
    const { schoolid } = useParams();
    const dispatch = useDispatch();

    const [teachers, setteachers] = useState([]);
    const [schoolName, setSchool] = useState("");
    const [deletedTeacher, delTeacher] = useState([]);
    const [allAccounts, setallAccounts] = useState([]);
    const [options, setoptions] = useState([]);
    const [addTeachers, setaddTeachers] = useState([]);
    const [removeTeacher, setremoveTeacher] = useState([]);

    useEffect(() => {
        getTeacher(schoolid).then((response) =>
            setteachers(response.data.teachers)
        );
        getSchool(schoolid).then((res) => setSchool(res.data.result.name));
        getAllAccounts().then((response) => {
            setallAccounts(response.data.result);
        });
    }, []);

    useEffect(() => {
        const teacher_id = teachers.map((teacher) => teacher.account_id);
        setoptions(
            allAccounts
                .filter((account) => !teacher_id.includes(account.account_id))
                .map((account) => ({
                    value: account.account_id,
                    label: (
                        <div className="d-flex">
                            <img
                                width={23}
                                height={23}
                                className="mr-2 rounded-full"
                                src={account.profile_picture ? `${BACKEND_URL}/media/${account.profile_picture}` : require("../img/user.png")}
                            />
                            {account.username}
                        </div>
                    ),
                }))
        );
    }, [allAccounts]);

    useEffect(() => {
        console.log(removeTeacher);
    }, [removeTeacher]);

    const handleAdd = () => {
        dispatch(startLoading());
        const body = {
            teachers: addTeachers.map((teacher) => teacher.value),
        };
        updateTeacher(schoolid, body)
            .then((response) => {
                dispatch(stopLoading());
                emitSuccess(
                    `${response.data.teachers.length} Teacher(s) has been added!`
                );
                window.location.reload();
            })
            .catch((err) => {
                dispatch(stopLoading());
                emitError("Something went wrong!");
            });
    };

    const handleRemove = () => {
        dispatch(startLoading());
        const body = {
            teachers: removeTeacher,
        };
        deleteTeacher(schoolid, body)
            .then((response) => {
                dispatch(stopLoading());
                emitSuccess(
                    `Teacher(s) has been removed!`
                );
                window.location.reload();
            })
            .catch((err) => {
                dispatch(stopLoading());
                emitError("Something went wrong!");
            });
    };

    return (
        <Container className="pt-32">
            <BackButton>Back</BackButton>
            <h1>Teacher Management</h1>
            <Row className="my-4">
                <Col xs={8}>
                    <Select
                        onChange={(e) => setaddTeachers(e)}
                        isMulti
                        options={options}
                    />
                </Col>
                <Col>
                    <Button onClick={handleAdd} color="primary">
                        <FontAwesomeIcon icon={faAdd} /> Add Teacher
                    </Button>
                </Col>
            </Row>
            <h1 className="mt-10 mb-4">
                Teachers ({teachers.length})
                <span className="float-right">
                    <Button onClick={handleRemove} color="danger">
                        <FontAwesomeIcon icon={faTrash} className="mr-2" />
                        Remove Teacher
                    </Button>
                </span>
            </h1>
            {teachers.length == 0 && <h3 className="text-center text-slate-400"><i>--- This school has no teacher yet ---</i></h3>}
            <div className="grid grid-cols-3 gap-4">
                {teachers.map((teacher, index) => (
                    <ProfileCard
                        key={index}
                        removeTeacher={removeTeacher}
                        setremoveTeacher={setremoveTeacher}
                        id={teacher.account_id}
                        name={teacher.username}
                        image={teacher.profile_picture}
                    />
                ))}
            </div>
        </Container>
    );
};

export default TeacherManagement;
