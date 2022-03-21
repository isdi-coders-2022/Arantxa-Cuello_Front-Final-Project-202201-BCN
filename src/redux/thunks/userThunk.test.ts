import { RegisterUser, User } from "../../types/userInterface";
import { loadProfileThunk, registerUserThunk } from "./userThunk";

describe("Given a registerUserThunks function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const user: RegisterUser = {
        username: "leo",
        password: "1234",
        name: "leo",
      };
      const dispatch = jest.fn();
      const registerThunk = registerUserThunk(user);
      await registerThunk(dispatch);
    });
  });
});
describe("Given a loadProfileThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const user: User = {
        username: "leo",
        loggedIn: true,
        name: "leo",
        id: "22",
      };
      const dispatch = jest.fn();
      const loadThunk = loadProfileThunk(user.id);
      await loadThunk(dispatch);
    });
  });
});
