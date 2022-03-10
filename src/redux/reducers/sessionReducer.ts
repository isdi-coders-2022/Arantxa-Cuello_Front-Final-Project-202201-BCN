import Session from "../../types/Session";
import { AnyAction } from "redux";
import {
  AnyActionInterface,
  loadSessionsInterface,
} from "../../types/actionsInterface";
import actionsTypes from "../actions/actionsTypes";

const sessionReducer = (
  state: Session[] = [],
  action: AnyActionInterface | AnyAction = {}
) => {
  let newSession: Session[];

  switch (action.type) {
    case actionsTypes.loadSessions:
      newSession = [...(action as loadSessionsInterface).session];
      break;

    default:
      newSession = [...state];
  }
  return newSession;
};

export default sessionReducer;
