import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import RegisterPage from "./RegisterPage";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a RegisterPage component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a form with an h1, input, label and submit button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );
      const heading = screen.getByRole("heading", {
        name: /Register HERE/i,
      });
      const input = screen.getByRole("main");
      const button = screen.getByRole("button", { name: /Register/i });
      expect(heading).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
