import { render, screen } from "@testing-library/react";
import SessionForm from "./Form";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

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
      const input = screen.getByRole("textbox", { name: /title/i });
      const label = screen.getByRole("textbox", { name: /comments/i });
      const button = screen.getByRole("button", { name: /send/i });

      expect(heading).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
