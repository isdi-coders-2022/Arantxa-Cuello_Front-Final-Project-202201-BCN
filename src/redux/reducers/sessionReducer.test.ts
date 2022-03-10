import Session from "../../types/Session";
import actionsTypes from "../actions/actionsTypes";
import sessionReducer from "./sessionReducer";

describe("Given a sessionReducer function", () => {
  describe("When it is called with an empty state and the loadSessions action with a session", () => {
    test("Then it should return the new state with the array of sessions", async () => {
      const state: Session[] = [];

      const sessionsArray: Session[] = [
        {
          title: "hello",
          comment: "mornings",
          date: "saturdays",
        },
        {
          title: "goodnight",
          comment: "evenings",
          date: "saturdays",
        },
      ];

      const action = {
        type: actionsTypes.loadSessions,
        match: sessionsArray,
      };

      const newState = await sessionReducer(state, action);

      expect(newState).toEqual(sessionsArray);
    });
  });
});
