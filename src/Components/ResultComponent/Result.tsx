import React, { useState } from "react";
import { IUserInput } from "../../Common/Interfaces";
import { ActivityLevels } from "../../Common/Enums";

const Result = (props: IUserInput) => {
  let calories: number = 2000;
  if (props.sex && props.age && props.weight && props.height && props.activity)
    if (props.sex === "Male") {
      calories = 66 + 13.7 * props.weight + 5 * props.height - 6.8 * props.age;
    } else {
      calories =
        655 + 9.6 * props.weight + 1.8 * props.height - 4.7 * props.age;
    }

  return <div></div>;
};

export default Result;
