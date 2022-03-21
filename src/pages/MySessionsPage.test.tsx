import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import MySessionPage from "./MySessionsPage";

describe("Given a MySessionPage Component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a heading and image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MySessionPage />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getByRole("heading", {
        name: /Please log in/i,
      });

      const body = screen.getByRole("img", { name: /trophy/i });

      expect(text).toBeInTheDocument();
      expect(body).toBeInTheDocument();
    });
  });
});
