import { Session } from "../../types/Session";
import actionsTypes from "../actions/actionsTypes";
import oneSessionReducer from "./oneSessionReducer";

describe("Given a oneSessionReducer function", () => {
  describe("When it is called with a loadOneSession action with a session", () => {
    test("Then it should return the new state with the session", () => {
      const session: Session = {
        title: "hello",
        comment: "mornings",
        date: "saturdays",
        iFrame: "example",
        id: "33",
      };

      const action = {
        type: actionsTypes.loadOneSession,
        session: session,
      };

      const newState = oneSessionReducer(session, action);

      expect(newState).toEqual(session);
    });
  });
});
