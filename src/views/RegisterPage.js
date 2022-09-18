import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { getAllAccounts, register } from "../services/account.service";

const RegisterPage = () => {
  const [firstname, setFirstname] = useState("")
  const [validation,setValidation] = useState({ submit:false, username: false ,password:false,confirm_password: false})
  const [allAccounts,setAllAccounts] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const usernames_list = []
    allAccounts.data.map(value => usernames_list.push(value.username))
    console.log(usernames_list)

    let valid_username = !usernames_list.includes(e.target.username.value)
    let valid_password = e.target.password.value.length >= 8
    let match_password = e.target.password.value == e.target.confirm_password.value
    
    setValidation({
      ...validation,
      submit: true,
      username: valid_username,
      password: valid_password,
      confirm_password: match_password 
    })

    if(valid_username && valid_password && match_password){
      console.log("VALID!")
    }
    else{
      console.log("No")
    }
  } 

  useEffect(()=>{
    getAllAccounts().then(
      response => setAllAccounts(response.data)
      )
  },[])

  return (
    <Form onSubmit={(e)=>handleSubmit(e)}>
      <Container className="register">
        <Row className="register-box">
          <Row>
            <h1 className="mb-10">Register</h1>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <Label for="firstname">
                Firstname<span className="required-star">*</span>
              </Label>
              <Input
                // valid={validation.submit && validation.firstname}
                // invalid={validation.submit && !validation.firstname}
                id="firstname"
                type="text"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Col>
            <Col>
              <Label for="lastname">
                Lastname<span className="required-star">*</span>
              </Label>
              <Input id="lastname" type="text" />
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label className="mt-3" for="username">
                Username<span className="required-star">*</span>
              </Label>
              <Input
                valid={validation.submit && validation.username}
                invalid={validation.submit && !validation.username}
                required={true}
                className="input"
                id="username" />

              <Label className="mt-3" for="password">
                Password<span className="required-star">*</span>
              </Label>
              <Input
                valid={validation.submit && validation.password}
                invalid={validation.submit && !validation.password}
                required={true}
                className="input"
                id="password"
                type="password"
              />

              <Label className="mt-3" for="confirm_password">
                Confirm Password<span className="required-star">*</span>
              </Label>
              <Input
                valid={validation.submit && validation.confirm_password}
                invalid={validation.submit && !validation.confirm_password}
                required={true}
                className="input"
                id="confirm_password"
                type="password"
              />
            </FormGroup>
          </Row>
          <Row md={2} xs={1}>
            <Col>
              <FormGroup>
                <Label for="email">
                  Email<span className="required-star">*</span>
                </Label>
                <Input required={true} id="email" type="email" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="year_of_birth">Birthyear</Label>
                <Input id="year_of_birth" type="number" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label for="description">Describe yourself</Label>
              <Input id="description" name="text" type="textarea" />
            </FormGroup>
          </Row>
          <Row className="justify-evenly">
            <Button className="register-btn my-20" type="submit" color="primary" size="lg">
              Register
            </Button>
          </Row>
        </Row>
      </Container>
    </Form>
  );
};

export default RegisterPage;
