import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";

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
});
