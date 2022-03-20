import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SessionForm from "../components/FormComponent/SessionForm";
import store from "../redux/store";

describe("Given a CreateSessionPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a SessionForm", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SessionForm />
          </Provider>
        </BrowserRouter>
      );

      const form = screen.getByRole("main", {
        name: "",
      });

      expect(form).toBeInTheDocument();
    });
  });
});
