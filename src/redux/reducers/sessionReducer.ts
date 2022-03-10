import Session from "../../types/Session";
import { AnyAction } from "redux";
import actionsTypes from "../actions/actionsTypes";

const sessionReducer = (state: Session[] = [], action: AnyAction) => {
  let newSession: Session[] | Session;

  switch (action.type) {
    case actionsTypes.loadSessions:
      newSession = [...action.session];
      break;

    default:
      newSession = [...state];
  }
  return newSession;
};

export default sessionReducer;
