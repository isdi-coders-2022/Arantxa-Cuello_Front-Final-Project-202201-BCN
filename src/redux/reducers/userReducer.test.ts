import { LoginUser, User } from "../../types/userInterface";
import actionsTypes from "../actions/actionsTypes";
import userReducer from "./userReducer";

describe("Given a userReducer function", () => {
  describe("When it is called with a login user action with a user", () => {
    test("Then it should return the new state with the user", () => {
      const state: LoginUser = {
        username: "leo",
        password: "1234",
        loggedIn: false,
      };

      const newUser: LoginUser = {
        username: "leo",
        password: "1234",
        loggedIn: false,
      };
      const action = {
        type: actionsTypes.loginUser,
        user: newUser,
      };

      const newState = userReducer(state, action);

      expect(newState).toEqual(newUser);
    });
  });
  describe("When it is called with a load profile action with a user", () => {
    test("Then it should return the new state with the user", () => {
      const state: User = {
        name: "Leo",
        username: "Leo",
        id: "22",
        loggedIn: true,
      };

      const newUser: User = {
        name: "Leo",
        username: "Leo",
        id: "22",
        loggedIn: true,
      };
      const action = {
        type: actionsTypes.loadProfile,
        user: newUser,
      };

      const newState = userReducer(state, action);

      expect(newState).toEqual(newUser);
    });
  });
});
