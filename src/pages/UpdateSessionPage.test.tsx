import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import UpdateSession from "./UpdateSessionPage";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given an UpdateSession component", () => {
  describe("When the user enters a group but doesn't enter a name", () => {
    test("Then the submit button should be disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UpdateSession />
          </Provider>
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: /Update/i });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
