import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import MyProfilePage from "./MyProfilePage";

describe("Given a My profile page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list of sessions", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyProfilePage />
          </Provider>
        </BrowserRouter>
      );

      const TextHeading = screen.getByRole("navigation", {
        name: "",
      });

      expect(TextHeading).toBeInTheDocument();
    });
  });
});
