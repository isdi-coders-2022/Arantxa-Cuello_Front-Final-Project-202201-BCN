import actionsTypes from "../actions/actionsTypes";
import { loadSessionsThunk } from "./sessionsThunks";

describe("Given a loadSessionsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(900000);

      const dispatch = jest.fn();

      await loadSessionsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
