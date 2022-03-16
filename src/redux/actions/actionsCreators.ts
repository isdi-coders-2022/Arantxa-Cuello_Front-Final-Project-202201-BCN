import actionsTypes from "../actions/actionsTypes";
import { Session } from "../../types/Session";
import {
  createSessionInterface,
  deleteSessionInterface,
  loadSessionsInterface,
} from "../../types/actionsInterface";

export const loadSessionsAction = (
  sessions: Session[]
): loadSessionsInterface => ({
  type: actionsTypes.loadSessions,
  sessions,
});

export const deleteSessionAction = (id: string): deleteSessionInterface => ({
  type: actionsTypes.deleteSession,
  id,
});

export const createSessionAction = (
  session: Session
): createSessionInterface => ({
  type: actionsTypes.createSession,
  session,
});
