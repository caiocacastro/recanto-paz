import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import localStorage from "redux-persist/lib/storage";

import { RootState, localReducers, sessionReducers } from ".";
import session from "redux-persist/lib/storage/session";

const rootReducer = combineReducers({
  local: persistReducer(
    {
      storage: localStorage,
      key: "local",
    },
    combineReducers(localReducers)
  ),
  session: persistReducer(
    {
      key: "session",
      storage: sessionStorage,
    },
    combineReducers(sessionReducers)
  ),
}) as unknown as Reducer<RootState>;

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  const persist = persistStore(store);

  return { store, persist };
};
