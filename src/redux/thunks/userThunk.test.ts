import { LoginUser, RegisterUser, User } from "../../types/userInterface";
import {
  loadProfileThunk,
  loginUserThunk,
  registerUserThunk,
} from "./userThunk";

jest.mock("jwt-decode", () => () => ({
  name: "leo",
  username: "leo",
}));

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
describe("Given a loginUserThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const login: LoginUser = {
        username: "leo",
        password: "1234",
        loggedIn: true,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibGVvIiwiaWQiOiI2MjM4NTVmNmZmMzhlZjdkNDkxODI5MGQiLCJpYXQiOjE2NDc5NjM4NzYsImV4cCI6MTY0ODU2ODY3Nn0.Xcq37tanqL2ICgATjiK_rw8sm1NKVapuUbHxQcRcf2k",
      };
      const dispatch = jest.fn();

      const loginUser = loginUserThunk(login);
      await loginUser(dispatch);
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
