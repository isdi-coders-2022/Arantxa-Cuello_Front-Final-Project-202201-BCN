import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Login from "./Login";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Login Component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a form with a username, password, and submit button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Login />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        name: /Log In/i,
      });
      const form = screen.getByRole("main", { name: "" });
      const button = screen.getByRole("button", { name: /Log In/i });
      const textbox = screen.getByRole("textbox", { name: "" });
      expect(heading).toBeInTheDocument();
      expect(form).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(textbox).toBeInTheDocument();
    });
  });
  describe("When the user enter a username 'Leo' and submit the form", () => {
    test("Then it should invoke dispatch", () => {
      const name = "Leo";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Login />
          </Provider>
        </BrowserRouter>
      );
      const nameInput = screen.getByRole("textbox", { name: "" });
      userEvent.type(nameInput, name);

      userEvent.click(screen.getByRole("button"));

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
