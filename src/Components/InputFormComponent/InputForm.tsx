import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { IUserInput } from "../../Common/Interfaces";
import { ActivityLevels } from "../../Common/Enums";

interface IInputFormProps {
  SetUserInput: (a: IUserInput) => void;
}

const InputForm = (props: IInputFormProps) => {
  const [sex, setSex] = useState<string>("Male");
  const handleSexChange = (sex: string) => {
    setSex(sex);
  };

  const [height, setHeight] = useState<number>(180);
  const handleHeightChange = (height: number) => {
    setHeight(height);
  };

  const [weight, setWeight] = useState<number>(80);
  const handleWeightChange = (weight: number) => {
    setWeight(weight);
  };

  const [activity, setActivity] = useState<ActivityLevels>(
    ActivityLevels.Sedentary
  );
  const handleActivityChange = (activity: string) => {
    activity = activity.split("(")[0].replace(/\s+/g, "");
    setActivity(ActivityLevels[activity as keyof typeof ActivityLevels]);
  };

  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.currentTarget.checkValidity() === true) {
      let UserInput: IUserInput = {
        sex: sex,
        height: height,
        weight: weight,
        activity: activity,
      };
      console.log(UserInput);
      props.SetUserInput(UserInput);
    }

    setValidated(true);
  };

  return (
    <Container>
      <Form inline noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formSex" className="mb-3">
              <Form.Label className="mr-2">Choose sex: </Form.Label>
              <Form.Control
                as="select"
                required
                value={sex}
                onChange={(e) => handleSexChange(e.target.value)}
              >
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formHeight" className="mb-3">
              <Form.Label className="mr-2">Enter height (cm):</Form.Label>
              <Form.Control
                type="number"
                required
                value={height}
                onChange={(e) => handleHeightChange(parseInt(e.target.value))}
              />
            </Form.Group>
          </Col>
          <Col xs={7}>
            <Form.Group controlId="formWeight" className="mb-3">
              <Form.Label className="mr-2">Enter weight (kg):</Form.Label>
              <Form.Control
                type="number"
                required
                value={weight}
                onChange={(e) => handleWeightChange(parseInt(e.target.value))}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formActivityLevel" className="mr-2">
              <Form.Label className="mr-2">Activity Level:</Form.Label>
              <Form.Control
                as="select"
                required
                value={activity}
                onChange={(e) => handleActivityChange(e.target.value)}
              >
                <option>{ActivityLevels.Sedentary}</option>
                <option>{ActivityLevels.LightlyActive}</option>
                <option>{ActivityLevels.ModeratelyActive}</option>
                <option>{ActivityLevels.VeryActive}</option>
                <option>{ActivityLevels.ExtremelyActive}</option>
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
