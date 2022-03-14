import { Session } from "../../types/Session";
import { deleteSessionAction, loadSessionsAction } from "./actionsCreators";

describe("Given a load sessions action", () => {
  describe("When it receives a session", () => {
    test("Then it should return an action type loadsessions", () => {
      const sessions: Session[] = [
        {
          title: "saturday",
          comment: "lalal",
          date: "today",
          iFrame: "example",
        },
        {
          title: "saturday",
          comment: "lalal",
          date: "today",
          iFrame: "example",
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
