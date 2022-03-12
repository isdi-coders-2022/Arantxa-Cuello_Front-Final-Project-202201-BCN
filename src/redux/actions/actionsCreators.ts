import actionsTypes from "../actions/actionsTypes";
import { Session } from "../../types/Session";
import { loadSessionsInterface } from "../../types/actionsInterface";

export const loadSessionsAction = (
  sessions: Session[]
): loadSessionsInterface => ({
  type: actionsTypes.loadSessions,
  sessions,
});
