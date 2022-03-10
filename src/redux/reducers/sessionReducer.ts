import { Session } from "../../types/Session";
import {
  AnyActionInterface,
  loadSessionsInterface,
} from "../../types/actionsInterface";
import actionsTypes from "../actions/actionsTypes";

const sessionReducer = (
  state: Session[] = [],
  action: AnyActionInterface | loadSessionsInterface = {
    type: "",
  }
) => {
  let newSession: Session[];

  switch (action.type) {
    case actionsTypes.loadSessions:
      newSession = [...(action as loadSessionsInterface).sessions];
      break;

    default:
      newSession = [...state];
  }
  return newSession;
};

export default sessionReducer;
