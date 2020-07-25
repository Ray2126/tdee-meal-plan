import React, { useState, useEffect } from "react";
import { IUserInput } from "../../Common/Interfaces";
import { ActivityLevels } from "../../Common/Enums";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Result.css";

interface IState {
  meals: [
    { sourceUrl: string; title: string },
    { sourceUrl: string; title: string },
    { sourceUrl: string; title: string }
  ];
  nutrients: {
    calories: number;
    carbohydrates: number;
    fat: number;
    protein: number;
  };
}

const Result = (props: IUserInput) => {
  let calories: number = 2000;
  if (props.sex && props.age && props.weight && props.height && props.activity)
    if (props.sex === "Male") {
      calories = 66 + 13.7 * props.weight + 5 * props.height - 6.8 * props.age;
    } else {
      calories =
        655 + 9.6 * props.weight + 1.8 * props.height - 4.7 * props.age;
    }
  switch (props.activity) {
    case ActivityLevels.Sedentary:
      calories = calories * 1.2;
      break;
    case ActivityLevels.LightlyActive:
      calories = calories * 1.375;
      break;
    case ActivityLevels.ModeratelyActive:
      calories = calories * 1.55;
      break;
    case ActivityLevels.VeryActive:
      calories = calories * 1.725;
      break;
    case ActivityLevels.ExtremelyActive:
      calories = calories * 1.9;
      break;
  }

  const [mealsArray, setMealsArray] = useState<IState>({
    meals: [
      { sourceUrl: "", title: "" },
      { sourceUrl: "", title: "" },
      { sourceUrl: "", title: "" },
    ],
    nutrients: { calories: 0, carbohydrates: 0, fat: 0, protein: 0 },
  });

  useEffect(() => {
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=${calories}&timeFrame=day`,
      {
        method: "GET",
        headers: {
          "x-rapid-api-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY || "",
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setMealsArray(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    props.sex,
    props.sex,
    props.height,
    props.weight,
    props.activity,
    calories,
  ]);

  return (
    <Container className="wrapper">
      <Row>
        <Col xs={12}>
          <h2>Your maintenance calories: </h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h4>{mealsArray.nutrients.calories}</h4>
        </Col>
      </Row>
      <Row className="exampleTitle">
        <Col xs={12}>
          <h2>Example Meal Plan: </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Protein: </h4>
        </Col>
        <Col>
          <h4>Carbs: </h4>
        </Col>
        <Col>
          <h4>Fat: </h4>
        </Col>
      </Row>
      <Row>
        <Col>{mealsArray.nutrients.protein}</Col>
        <Col>{mealsArray.nutrients.carbohydrates}</Col>
        <Col>{mealsArray.nutrients.fat}</Col>
      </Row>

      <Row className="mealCards">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Breakfast</Card.Title>
              <Card.Text>{mealsArray.meals[0].title}</Card.Text>
              <Card.Link target="_blank" href={mealsArray.meals[0].sourceUrl}>
                Link to recipe
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Lunch</Card.Title>
              <Card.Text>{mealsArray.meals[1].title}</Card.Text>
              <Card.Link target="_blank" href={mealsArray.meals[1].sourceUrl}>
                Link to recipe
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Dinner</Card.Title>
              <Card.Text>{mealsArray.meals[2].title}</Card.Text>
              <Card.Link target="_blank" href={mealsArray.meals[2].sourceUrl}>
                Link to recipe
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Result;
