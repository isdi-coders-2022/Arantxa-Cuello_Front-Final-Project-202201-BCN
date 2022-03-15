import { Session } from "../../types/Session";
import {
  AnyActionInterface,
  deleteSessionInterface,
  loadSessionsInterface,
} from "../../types/actionsInterface";
import actionsTypes from "../actions/actionsTypes";

const sessionReducer = (
  state: Session[] = [],
  action:
    | AnyActionInterface
    | loadSessionsInterface
    | deleteSessionInterface = {
    type: "",
  }
) => {
  let newSession: Session[];

  switch (action.type) {
    case actionsTypes.loadSessions:
      newSession = [...(action as loadSessionsInterface).sessions];
      break;

    case actionsTypes.deleteSession:
      newSession = state.filter(
        (session) => session.id !== (action as deleteSessionInterface).id
      );
      break;

    default:
      newSession = [...state];
  }
  return newSession;
};

export default sessionReducer;
