import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SessionCard from "./SessionCard";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("Given a SessionCard Component", () => {
  describe("When it receives a session with the title 'saturday'", () => {
    test("Then it should display a list session with the title 'saturday'", () => {
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
            <SessionCard actionOnClick={actionOnClick} session={session} />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(session.title);
      const list = screen.getByRole("listitem");
      const commentCard = screen.getByText(session.comment);
      const heading = screen.getByRole("heading", { name: /saturday/i });
      const image = screen.getByRole("link", { name: /eye/i });

      expect(expectedText).toBeInTheDocument();
      expect(list).toBeInTheDocument();
      expect(commentCard).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
  });
  describe("When the eye icon is clicked", () => {
    test("Then it should execute the action", () => {
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
            <SessionCard actionOnClick={actionOnClick} session={session} />
          </Provider>
        </BrowserRouter>
      );
      const deleteIcon = screen.queryByTestId("currentIcon") as HTMLElement;
      userEvent.click(deleteIcon);

      expect(deleteIcon).toBeInTheDocument();
    });
  });
});
