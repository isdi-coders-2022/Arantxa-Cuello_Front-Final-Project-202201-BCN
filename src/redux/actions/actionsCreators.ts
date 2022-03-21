import actionsTypes from "../actions/actionsTypes";
import { Session } from "../../types/Session";
import {
  AnyActionInterface,
  createSessionInterface,
  deleteSessionInterface,
  loadOneSessionInterface,
  loadProfileInterface,
  loadSessionsInterface,
  loginUserInterface,
  updateSessionInterface,
} from "../../types/actionsInterface";
import { LoginUser, RegisterUser, User } from "../../types/userInterface";

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

export const loginUserAction = (
  user: User | LoginUser
): loginUserInterface => ({
  type: actionsTypes.loginUser,
  user,
});

export const logoutUserAction = (): AnyActionInterface => ({
  type: actionsTypes.logoutUser,
});

export const registerUserAction = (user: RegisterUser) => ({
  type: actionsTypes.registerUser,
  user: user,
});

export const loadProfileAction = (
  sessions: Session[]
): loadProfileInterface => ({
  type: actionsTypes.loadProfile,
  sessions,
});
