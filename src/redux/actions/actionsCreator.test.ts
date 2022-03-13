import { Session } from "../../types/Session";
import { loadSessionsAction } from "./actionsCreators";

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
