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

const RegisterPage = () => {
  const [firstname, setFirstname] = useState("");
  const [invalid, setInvalid] = useState({ firstname: false });
  const [valid, setValid] = useState({ firstname: false });

  useEffect(() => {
    if (firstname == "abcde") {
      setInvalid({ firstname: true });
      setValid({ firstname: false });
    } else if (firstname == "") {
      setValid({ firstname: false });
      setInvalid({ firstname: false });
    } else {
      setValid({ firstname: true });
      setInvalid({ firstname: false });
    }
  }, [firstname]);

  const validation = () => {};

  return (
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
              valid={valid.firstname}
              invalid={invalid.firstname}
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
          <Form>
            <FormGroup>
              <Label className="mt-3" for="User">
                Username<span className="required-star">*</span>
              </Label>
              <Input required={true} className="input" id="User" />

              <Label className="mt-3" for="Password">
                Password<span className="required-star">*</span>
              </Label>
              <Input
                required={true}
                className="input"
                id="Password"
                type="password"
              />

              <Label className="mt-3" for="Password">
                Confirm Password<span className="required-star">*</span>
              </Label>
              <Input
                required={true}
                className="input"
                id="Password"
                type="password"
              />
            </FormGroup>
          </Form>
        </Row>
        <Row md={2} xs={1}>
          <Col>
            <FormGroup>
              <Label for="Email">
                Email<span className="required-star">*</span>
              </Label>
              <Input required={true} id="Email" type="email" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="birthyear">Birthyear</Label>
              <Input id="birthyear" type="number" />
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
          <Button className="register-btn my-20" color="primary" size="lg">
            Register
          </Button>
        </Row>
      </Row>
    </Container>
  );
};

export default RegisterPage;
