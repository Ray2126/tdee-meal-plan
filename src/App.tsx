import React, { useState } from "react";
import InputForm from "./Components/InputFormComponent/InputForm";
import Result from "./Components/ResultComponent/Result";
import "./App.css";
import { IUserInput } from "./Common/Interfaces";
import { ActivityLevels } from "./Common/Enums";

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    sex: "Male",
    age: 18,
    height: 180,
    weight: 80,
    activity: ActivityLevels.Sedentary,
  });
  const SetUserInput = (a: IUserInput) => {
    setUserInput(a);
  };

  return (
    <div>
      <InputForm SetUserInput={(a: IUserInput) => SetUserInput(a)} />
      <Result
        sex={UserInput.sex}
        age={UserInput.age}
        height={UserInput.height}
        weight={UserInput.weight}
        activity={UserInput.activity}
      />
    </div>
  );
}

export default App;
