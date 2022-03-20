import { combineReducers } from "redux";
import store from "../store";
import oneSessionReducer from "./oneSessionReducer";
import sessionReducer from "./sessionReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  sessions: sessionReducer,
  currentSession: oneSessionReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof store.getState>;
