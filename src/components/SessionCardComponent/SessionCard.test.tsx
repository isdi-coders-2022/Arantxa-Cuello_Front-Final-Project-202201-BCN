import { render, screen } from "@testing-library/react";
import SessionCard from "./SessionCard";

describe("Given a SessionCard Component", () => {
  describe("When it receives a session with the title 'saturday'", () => {
    test("Then it should display a list session with the title 'saturday'", () => {
      const session = {
        title: "saturday",
        comment: "blabla",
        date: "monday",
      };
      render(<SessionCard session={session} />);

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
});
