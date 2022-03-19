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
      const dateCard = screen.getByText(session.date);

      expect(expectedText).toBeInTheDocument();
      expect(list).toBeInTheDocument();
      expect(commentCard).toBeInTheDocument();
      expect(dateCard).toBeInTheDocument();
    });
  });
  describe("When the delete icon is clicked", () => {
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
      const deleteIcon = screen.queryByTestId("deleteIcon") as HTMLElement;
      userEvent.click(deleteIcon);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
