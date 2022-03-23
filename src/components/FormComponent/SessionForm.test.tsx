import { render, screen } from "@testing-library/react";
import SessionForm from "./SessionForm";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import userEvent from "@testing-library/user-event";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});
describe("Given a SessionForm Component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a form with an h1, input, label and submit button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SessionForm />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        name: /Welcome! You can create your own meditation session here/i,
      });
      const input = screen.getByRole("main");
      const button = screen.getByRole("button", { name: /Send/i });
      expect(heading).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user enter a title 'hello' and submit the form", () => {
    test("Then it should invoke dispatch", () => {
      const title = "hello";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SessionForm />
          </Provider>
        </BrowserRouter>
      );
      const titleInput = screen.getByPlaceholderText(/title/i);
      userEvent.type(titleInput, title);

      userEvent.click(screen.getByRole("button"));

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
