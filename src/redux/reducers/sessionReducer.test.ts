import { Session } from "../../types/Session";
import actionsTypes from "../actions/actionsTypes";
import sessionReducer from "./sessionReducer";

describe("Given a sessionReducer function", () => {
  describe("When it is called with a loadSessions action with an array of sessions", () => {
    test("Then it should return the new state with the array of sessions", () => {
      const state: Session[] = [];

      const sessionsArray: Session[] = [
        {
          title: "hello",
          comment: "mornings",
          date: "saturdays",
          iFrame: "example",
          id: "33",
        },
        {
          title: "goodnight",
          comment: "evenings",
          date: "saturdays",
          iFrame: "example2",
          id: "22",
        },
      ];

      const action = {
        type: actionsTypes.loadSessions,
        sessions: sessionsArray,
      };

      const newState = sessionReducer(state, action);

      expect(newState).toEqual(sessionsArray);
    });
  });
});
describe("Given a deleteSessionReducer function", () => {
  describe("When it is called with a deleteSession action and an id", () => {
    test("Then it should return the new state without the session deleted", () => {
      const state: Session[] = [
        {
          title: "hello",
          comment: "mornings",
          date: "saturdays",
          iFrame: "example",
          id: "33",
        },
        {
          title: "goodnight",
          comment: "evenings",
          date: "saturdays",
          iFrame: "example2",
          id: "22",
        },
      ];

      const action = {
        type: actionsTypes.deleteSession,
        id: "22",
      };

      const newSessionResult = [
        {
          title: "hello",
          comment: "mornings",
          date: "saturdays",
          iFrame: "example",
          id: "33",
        },
      ];

      const newState = sessionReducer(state, action);
      expect(newState).toEqual(newSessionResult);
    });
  });
});
describe("Given a createSession reducer", () => {
  describe("When it receives a create action with a new session", () => {
    test("Then it should return the new session", () => {
      const state: Session[] = [
        {
          title: "hello",
          comment: "mornings",
          date: "saturdays",
          iFrame: "example",
          id: "33",
        },
      ];
      const newSession = {
        title: "123",
        comment: "mornings",
        date: "saturdays",
        iFrame: "example",
        id: "32",
      };

      const action = {
        type: actionsTypes.createSession,
        session: newSession,
      };

      const create = sessionReducer(state, action);

      expect(create).toHaveLength(2);
    });
  });
});
describe("Given a updateSession reducer", () => {
  describe("When it receives an update action with a new session", () => {
    test("Then it should return the new session", () => {
      const state: Session[] = [
        {
          title: "hello",
          comment: "mornings",
          date: "saturdays",
          iFrame: "example",
          id: "32",
        },
      ];
      const newSession = {
        title: "123",
        comment: "mornings",
        date: "saturdays",
        iFrame: "example",
        id: "32",
      };

      const action = {
        type: actionsTypes.updateSession,
        session: newSession,
      };

      const update = sessionReducer(state, action);

      expect(update[0].title).toBe(newSession.title);
    });
  });
});
