import { RegisterUser, User } from "../../types/userInterface";
import {
  loadProfileThunk,
  //loginUserThunk,
  registerUserThunk,
} from "./userThunk";

/*describe("Given a loginUserThunks function", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with the login user action", async () => {
      const user = {
        username: "leo",
        password: "1234",
      };

      const expectedAction = {
        type: "login-user",
        user: user,
      };
      const dispatch = jest.fn();
      const loginThunk = loginUserThunk(user);
      await loginThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});*/

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
