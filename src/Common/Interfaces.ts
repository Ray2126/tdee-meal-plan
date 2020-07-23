import { ActivityLevels } from "./Enums";

export interface IUserInput {
  sex: string | null;
  height: number | null;
  weight: number | null;
  activity: ActivityLevels | null;
}
