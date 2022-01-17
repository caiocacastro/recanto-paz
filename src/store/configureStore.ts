import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { Reducer, combineReducers, createStore, Store, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {persistReducer, persistStore} from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import localStorage from 'redux-persist/lib/storage'

import { RootState, sessionReducers, localReducers } from "../store";

const rootReducer = (combineReducers({
    local: persistReducer(
        {
            key: 'localData',
            storage: localStorage,
        }, combineReducers(localReducers),
    ),
    session: persistReducer(
        {
        key: 'sessionData',
        storage: sessionStorage,
        }, combineReducers(sessionReducers),
    ),
}) as unknown) as Reducer<RootState>

const middlewares = [thunk]

export default () => {
    const store: Store<RootState> = createStore<RootState, any, any, any>(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
}