import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { loginUserAction } from "./redux/actions/actionsCreators";
import store from "./redux/store";
import { User } from "./types/userInterface";

jest.mock("jwt-decode", () => () => ({
  name: "leo",
  username: "leo",
}));
describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render HomePage", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const nav = screen.getByRole("heading", {
        name: "Welcome to Mindfulness, your meditation space.",
      });
      const sessions = screen.getByRole("link", { name: /login/i });

      expect(nav).toBeInTheDocument();
      expect(sessions).toBeInTheDocument();
    });
  });
  test("Then it should dispatch a login user action with user info", async () => {
    const user: User = {
      username: "leo",
      name: "leo",
      loggedIn: false,
      id: "23",
    };
    const dispatch = jest.fn();
  });
});
