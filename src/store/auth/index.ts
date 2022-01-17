import {
    ImmerReducer,
    createActionCreators,
    createReducerFunction,
} from 'immer-reducer'

export type State = {
    login: string;
    nomeUsuario: string;
}

const DEFAULT_STATE: State = {
    login: '',
    nomeUsuario: '',
}

class AuthReducer extends ImmerReducer<State> {

}

export const authActions = createActionCreators(AuthReducer)
export const authReducer = createReducerFunction(AuthReducer, DEFAULT_STATE)

// export { default as authThunks} from './thunks'