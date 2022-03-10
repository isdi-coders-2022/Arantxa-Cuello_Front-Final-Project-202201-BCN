import { combineReducers } from "redux";
import store from "../store";
import sessionReducer from "./sessionReducer";

export const rootReducer = combineReducers({ sessions: sessionReducer });

export type RootState = ReturnType<typeof store.getState>;
