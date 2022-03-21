import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/LoginComponent/Login";
import store from "../redux/store";

describe("Given a LoginPage component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display login component", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Login />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getByRole("main", { name: "" });

      expect(text).toBeInTheDocument();
    });
  });
});
