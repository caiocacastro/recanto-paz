import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';
import { FormType } from '../../model/forms';

type State = {
  form?: FormType;
};

const initialState: State = {
  form: undefined,
};

class formReducer extends ImmerReducer<State> {
  setForm(form: FormType) {
    this.draftState.form = form;
  }
}

export const FormActions = createActionCreators(formReducer);
export const FormReducer = createReducerFunction(formReducer, initialState);
