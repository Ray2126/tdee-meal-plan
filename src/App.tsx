import React, { useState } from "react";
import InputForm from "./Components/InputFormComponent/InputForm";
import "./App.css";
import { IUserInput } from "./Common/Interfaces";
import { ActivityLevels } from "./Common/Enums";

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    sex: "Male",
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
    </div>
  );
}

export default App;
