import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Col,
    Container,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Row,
} from "reactstrap";
import { emitError, emitSuccess } from "../functions/toastify.function";
import { startLoading, stopLoading } from "../redux/loading.reducer";
import { chagenPassword } from "../services/account.service";

const ChangePassword = () => {
    const nevigate = useNavigate();
    const dispatch = useDispatch();
    const [invalid, setinvalid] = useState({ len: false, match: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        setinvalid({ len: false, match: false });
        console.log(e.target.old_password.value);

        if (e.target.old_password.value.length < 8) {
            setinvalid({ ...invalid, len: true });
        } else if (e.target.old_password.value != e.target.new_password.value) {
            setinvalid({ ...invalid, match: true });
        } else {
            const body = {
                password: e.target.old_password.value,
            };

            dispatch(startLoading());
            chagenPassword(body)
                .then((response) => {
                    dispatch(stopLoading());
                    emitSuccess("Your password has been changed!");
                    nevigate("/my-profile");
                })
                .catch((err) => {
                    dispatch(stopLoading());
                    emitError("This password has already used!")
                });
        }
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Container className="register">
                <Row className="register-box">
                    <Row className="mt-5">
                        <h1>Change Password</h1>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label className="mt-3" for="old_password">
                                Old Password
                                <span className="required-star">*</span>
                            </Label>
                            <Input
                                required={true}
                                className="input"
                                id="old_password"
                                type="password"
                                invalid={invalid.len}
                            />
                            <FormFeedback>
                                Your password must contain at least 8 characters
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label className="mt-3" for="new_password">
                                New Password
                                <span className="required-star">*</span>
                            </Label>
                            <Input
                                required={true}
                                className="input"
                                id="new_password"
                                type="password"
                                invalid={invalid.match}
                            />
                            <FormFeedback>
                                Your password doesn't match with above
                            </FormFeedback>
                        </FormGroup>
                    </Row>
                    <Row className="justify-evenly mt-4">
                        <Col>
                            <Button
                                className="edit-save-btn"
                                type="submit"
                                color="primary"
                                size="lg"
                            >
                                Save
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                className="edit-cancel-btn"
                                type="submit"
                                color="secondary"
                                size="lg"
                                onClick={() => nevigate("/my-profile")}
                            >
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Form>
    );
};

export default ChangePassword;
