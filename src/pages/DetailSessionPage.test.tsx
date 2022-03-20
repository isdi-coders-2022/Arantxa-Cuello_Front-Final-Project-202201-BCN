import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DetailCard from "../components/DetailCard/DetailCard";
import store from "../redux/store";

describe("Given a DetailSessionPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a DetailCard", () => {
      const session = {
        title: "saturday",
        comment: "blabla",
        date: "monday",
        iFrame: "example",
        id: "23",
      };
      const actionOnClick = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailCard actionOnClick={actionOnClick} session={session} />
          </Provider>
        </BrowserRouter>
      );

      const card = screen.getByRole("heading", {
        name: /saturday/i,
      });
      const onClick = screen.getByRole("img", { name: /trash/i });

      expect(card).toBeInTheDocument();
      expect(onClick).toBeInTheDocument();
    });
  });
});
