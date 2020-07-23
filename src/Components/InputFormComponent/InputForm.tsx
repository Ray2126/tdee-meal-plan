import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const InputForm = () => {
  return (
    <Container>
      <Form inline>
        <Row md={3} lg={3}>
          <Col>
            <Form.Group controlId="formSex" className="mx-1 mb-5">
              <Form.Label>Choose sex: </Form.Label>
              <Form.Control as="select">
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formHeight" className="mx-1">
              <Form.Label>Enter height (cm):</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formWeight" className="mx-1">
              <Form.Label>Enter weight (kg):</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formActivityLevel">
              <Form.Label>Activity Level:</Form.Label>
              <Form.Control as="select">
                <option>Sedentary (little to no exercise, desk job)</option>
                <option>Lightly Active (light exercise 1-3 days/week)</option>
                <option>
                  Moderately Active (moderate exercise 3-5 days/week)
                </option>
                <option>Very Active (heavy exercise 6-7 days/week)</option>
                <option>
                  Extremely Active (very heavy exercise, hard labor job,
                  training 2x/day)
                </option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default InputForm;
