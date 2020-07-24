import { ActivityLevels } from "./Enums";

export interface IUserInput {
  sex: string | null;
  age: number | null;
  height: number | null;
  weight: number | null;
  activity: ActivityLevels | null;
}
