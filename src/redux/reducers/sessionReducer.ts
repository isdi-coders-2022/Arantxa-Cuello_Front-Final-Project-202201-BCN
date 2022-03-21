import { Session } from "../../types/Session";
import {
  AnyActionInterface,
  deleteSessionInterface,
  loadSessionsInterface,
  createSessionInterface,
  updateSessionInterface,
  loadProfileInterface,
} from "../../types/actionsInterface";
import actionsTypes from "../actions/actionsTypes";

const sessionReducer = (
  state: Session[] = [],
  action:
    | AnyActionInterface
    | loadSessionsInterface
    | deleteSessionInterface
    | createSessionInterface
    | updateSessionInterface
    | loadProfileInterface = {
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

    case actionsTypes.createSession:
      newSession = [...state, (action as createSessionInterface).session];
      break;

    case actionsTypes.updateSession:
      newSession = state.map((session) =>
        session.id === (action as updateSessionInterface).session.id
          ? { ...(action as updateSessionInterface).session }
          : { ...session }
      );
      break;
    case actionsTypes.loadProfile:
      newSession = [...(action as loadProfileInterface).sessions];

      break;

    default:
      newSession = [...state];
  }
  return newSession;
};

export default sessionReducer;
