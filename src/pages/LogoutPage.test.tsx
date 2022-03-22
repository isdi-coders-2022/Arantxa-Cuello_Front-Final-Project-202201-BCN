import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { logoutUserAction } from "../redux/actions/actionsCreators";
import store from "../redux/store";
import LogoutPage from "./logoutPage";

describe("Given a LogoutPage component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display login component", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogoutPage />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getByRole("main", { name: "" });

      expect(text).toBeInTheDocument();
    });
  });
  test("Then it should display a header and a button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <LogoutPage />
        </Provider>
      </BrowserRouter>
    );
    const text = screen.getByRole("heading", {
      name: /Do you want to log out?/i,
    });
    const button = screen.getByRole("button", {
      name: /Log out./i,
    });

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  describe("When it receives an action of logout", () => {
    test("Then it should call dispatch", async () => {
      const dispatch = jest.fn();
      await dispatch(logoutUserAction());
    });
  });
});
