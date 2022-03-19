import { ThunkDispatch } from "redux-thunk";
import {
  loadSessionsAction,
  deleteSessionAction,
  createSessionAction,
  loadOneSessionAction,
} from "../actions/actionsCreators";
import { AnyAction } from "redux";
import { NewSession } from "../../types/Session";

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
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteSessionAction(id));
    }
  };

export const createSessionThunk =
  (session: NewSession) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}create`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(session),
      }
    );
    if (response.ok) {
      const newSession = await response.json();

      dispatch(createSessionAction(newSession));
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
