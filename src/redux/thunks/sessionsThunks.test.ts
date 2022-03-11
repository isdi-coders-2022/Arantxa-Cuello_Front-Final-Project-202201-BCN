import { loadSessionsThunk } from "./sessionsThunks";

describe("Given a loadSessionsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await loadSessionsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
