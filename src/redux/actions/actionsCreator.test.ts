import { Session } from "../../types/Session";
import {
  createSessionAction,
  deleteSessionAction,
  loadOneSessionAction,
  loadSessionsAction,
  updateSessionAction,
} from "./actionsCreators";

describe("Given a load sessions action", () => {
  describe("When it receives a session", () => {
    test("Then it should return an action type loadsessions", () => {
      const sessions: Session[] = [
        {
          title: "saturday",
          comment: "lalal",
          date: "today",
          iFrame: "example",
          id: "33",
        },
        {
          title: "saturday",
          comment: "lalal",
          date: "today",
          iFrame: "example",
          id: "22",
        },
      ];

      const expectedAction = {
        type: "load-sessions",
        sessions,
      };

      const action = loadSessionsAction(sessions);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a deleteSessionAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action with type 'delete-session' and the session id as another property", () => {
      const idTodelete = "5";

      const expectedAction = {
        type: "delete-session",
        id: idTodelete,
      };

      const action = deleteSessionAction(idTodelete);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a createSessionAction function", () => {
  describe("When it receives an session", () => {
    test("Then it should return an action with type 'create-session' and the new session", () => {
      const newSession: Session = {
        title: "saturday",
        comment: "lalal",
        date: "today",
        iFrame: "example",
        id: "22",
      };

      const expectedAction = {
        type: "create-session",
        session: newSession,
      };

      const action = createSessionAction(newSession);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given an updateSessionAction function", () => {
  describe("When it receives an session", () => {
    test("Then it should return an action with type 'update-session' and the new session", () => {
      const newSession: Session = {
        title: "saturday",
        comment: "lalal",
        date: "today",
        iFrame: "example",
        id: "22",
      };

      const expectedAction = {
        type: "update-session",
        session: newSession,
      };

      const action = updateSessionAction(newSession);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a load one sessions action", () => {
  describe("When it receives a session", () => {
    test("Then it should return an action type loadsessions", () => {
      const session: Session = {
        title: "saturday",
        comment: "lalal",
        date: "today",
        iFrame: "example",
        id: "33",
      };

      const expectedAction = {
        type: "loadOne-session",
        session,
      };

      const action = loadOneSessionAction(session);

      expect(action).toEqual(expectedAction);
    });
  });
});
