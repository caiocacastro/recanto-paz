import { UserReducer } from "./user";

export const sessionReducers = {
  user: UserReducer,
};

export const localReducers = {};

type SessionState = typeof sessionReducers;
type LocalState = typeof localReducers;

export type RootState = {
  session: SessionState;
  local: LocalState;
};
