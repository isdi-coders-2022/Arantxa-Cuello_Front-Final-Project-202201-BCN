import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import DetailSessionPage from "./DetailSessionPage";

describe("Given a DetailSessionPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a DetailCard", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailSessionPage />
          </Provider>
        </BrowserRouter>
      );

      const card = screen.getByRole("heading", {
        name: "",
      });
      const onClick = screen.getByRole("img", { name: /trash/i });

      expect(card).toBeInTheDocument();
      expect(onClick).toBeInTheDocument();
    });
  });
});
