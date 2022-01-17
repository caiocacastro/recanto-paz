import { StateType } from 'typesafe-actions';

import { authReducer } from '../store/auth';

export const sessionReducers = {
    auth: authReducer,
};

export const localReducers = {};

type SessionState = StateType<typeof sessionReducers>;
type LocalState = StateType<typeof localReducers>;

export type RootState = {
    session: SessionState;
    local: LocalState;
};
