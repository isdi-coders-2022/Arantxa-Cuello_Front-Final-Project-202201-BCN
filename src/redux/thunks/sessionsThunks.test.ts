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
/* describe("Given a deleteSessionThunk function", () => {
  describe("When it is called with an existing id", () => {
    test("Then it should call dispatch with the deleteSessionAction as parameter", async () => {
      const id = "622faa6084d6259f6589d0df";
      const expectedAction = {
        type: "delete-session",
        id: id,
      };
      const dispatch = jest.fn();

      const deleteThunk = deleteSessionThunk(id);
      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});*/
