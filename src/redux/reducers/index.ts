import { combineReducers } from "redux";
import store from "../store";
import oneSessionReducer from "./oneSessionReducer";
import sessionReducer from "./sessionReducer";

export const rootReducer = combineReducers({
  sessions: sessionReducer,
  currentSession: oneSessionReducer,
});

export type RootState = ReturnType<typeof store.getState>;
