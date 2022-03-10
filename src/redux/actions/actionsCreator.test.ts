import { Session } from "../../types/Session";
import { loadSessionsAction } from "./actionsCreators";

describe("Given a load sessions action", () => {
  describe("When it receives a session", () => {
    test("Then it should return an action type loadsessions", () => {
      const session: Session = {
        title: "saturday",
        comment: "lalal",
        date: "today",
      };

      const expectedAction = {
        type: "load-sessions",
        session,
      };

      const action = loadSessionsAction(session);

      expect(action).toEqual(expectedAction);
    });
  });
});
