import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import DetailCard from "./DetailCard";

describe("Given a DetailCard Component", () => {
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
            <DetailCard actionOnClick={actionOnClick} session={session} />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(session.title);
      const link = screen.getByRole("link");
      const commentCard = screen.getByText(session.comment);
      const dateCard = screen.getByText(session.date);

      expect(expectedText).toBeInTheDocument();
      expect(link).toBeInTheDocument();
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
            <DetailCard actionOnClick={actionOnClick} session={session} />
          </Provider>
        </BrowserRouter>
      );
      const deleteIcon = screen.queryByTestId("deleteIcon") as HTMLElement;
      userEvent.click(deleteIcon);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
