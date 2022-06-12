import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from "immer-reducer";
import { IUser } from "../../model/user";

type State = {
  user?: IUser;
};

const initialState: State = {};

class userReducer extends ImmerReducer<State> {
  setUser(user: IUser) {
    this.draftState.user = user;
  }
}

export const UserActions = createActionCreators(userReducer);
export const UserReducer = createReducerFunction(userReducer, initialState);
