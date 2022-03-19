import actionsTypes from "../actions/actionsTypes";
import { Session } from "../../types/Session";
import {
  AnyActionInterface,
  createSessionInterface,
  deleteSessionInterface,
  loadOneSessionInterface,
  loadSessionsInterface,
  updateSessionInterface,
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

export const loadOneSessionAction = (
  session: Session
): loadOneSessionInterface => ({
  type: actionsTypes.loadOneSession,
  session,
});

export const clearDetailSessionAction = (): AnyActionInterface => ({
  type: actionsTypes.clearDetailSession,
});

export const updateSessionAction = (
  session: Session
): updateSessionInterface => ({
  type: actionsTypes.updateSession,
  session,
});
