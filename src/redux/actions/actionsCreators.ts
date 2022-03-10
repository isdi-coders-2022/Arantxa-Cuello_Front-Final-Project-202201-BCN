import actionsTypes from "../actions/actionsTypes";
import { Session } from "../../types/Session";

export const loadSessionsAction = (session: Session) => ({
  type: actionsTypes.loadSessions,
  session,
});
