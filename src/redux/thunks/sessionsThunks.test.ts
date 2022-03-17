import {
  loadSessionsThunk,
  deleteSessionThunk,
  createSessionThunk,
} from "./sessionsThunks";

describe("Given a loadSessionsthunks function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadSessionsThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe("Given a deleteSessionThunk function", () => {
  describe("When it is called with an existing id", () => {
    test("Then it should call dispatch", async () => {
      const id = "6233212de3b7b5bc827f58de";

      const dispatch = jest.fn();

      const deleteThunk = deleteSessionThunk(id);
      await deleteThunk(dispatch);
    });
  });
});
describe("Given a createSessionThunk function", () => {
  describe("When it is called with a new session", () => {
    test("Then it should call dispatch", async () => {
      const newSession = {
        title: "hello",
        date: "today",
        comment: "hola",
        iFrame: "ejemplo",
        id: "23",
      };
      const dispatch = jest.fn();
      const createThunk = createSessionThunk(newSession);
      await createThunk(dispatch);
    });
  });
});
