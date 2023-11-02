import { User } from "../../interfaces/User";

export interface HomeConfigInterface {
  logged: boolean;
  users?: User[];
}
