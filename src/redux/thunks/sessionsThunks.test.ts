import { loadSessionsThunk } from "./sessionsThunks";

describe("Given a loadSessionsthunks function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadSessionsThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
