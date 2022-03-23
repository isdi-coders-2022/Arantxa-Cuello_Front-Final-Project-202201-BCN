import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import LoginPage from "./LoginPage";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({
    loggedIn: true,
    id: "23",
  }),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a LoginPage component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display login component", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getByRole("main", { name: "" });

      expect(text).toBeInTheDocument();
    });
  });
});
describe("Given a LoginPage function", () => {
  describe("When the user is logged in", () => {
    test("Then it should call to navigate", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
