import { ThunkDispatch } from "redux-thunk";
import {
  loadSessionsAction,
  deleteSessionAction,
  createSessionAction,
  loadOneSessionAction,
  updateSessionAction,
} from "../actions/actionsCreators";
import { AnyAction } from "redux";
import { EditSession, NewSession } from "../../types/Session";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

export const loadSessionsThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_MINDFULNESS}allsessions`
  );
  const sessionsList = await response.json();
  const sessions = sessionsList.sessions;
  dispatch(loadSessionsAction(sessions));
};

export const deleteSessionThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("UserToken");
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    if (response.ok) {
      dispatch(deleteSessionAction(id));
      toast.success("Session deleted!");
    }
  };

export const createSessionThunk =
  (session: NewSession) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("UserToken");
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}create`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(session),
      }
    );
    if (response.ok) {
      const newSession = await response.json();

      dispatch(createSessionAction(newSession));
      toast.success("Session created!");
    }
  };

export const loadOneSessionThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}allsessions/session/${id}`
    );
    const currentSession = await response.json();

    dispatch(loadOneSessionAction(currentSession));
  };

export const updateSessionThunk =
  (session: EditSession, navigate: NavigateFunction) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("UserToken");
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}edit/session/${session.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(session),
      }
    );
    if (response.ok) {
      const updatedSession = await response.json();
      dispatch(updateSessionAction(updatedSession));
      navigate("/allsessions");
    }
  };
