import { useState, ChangeEvent, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { createSessionThunk } from "../../redux/thunks/sessionsThunks";

const SessionForm = (): JSX.Element => {
  const initialData = {
    title: "",
    comment: "",
    iFrame: "",
    date: "",
    id: "",
  };
  const [session, setSession] = useState(initialData);

  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setSession({ ...session, title: event.target.value });
  };
  const changeComment = (event: ChangeEvent<HTMLInputElement>) => {
    setSession({ ...session, comment: event.target.value });
  };
  const changeIframe = (event: ChangeEvent<HTMLInputElement>) => {
    setSession({ ...session, iFrame: event.target.value });
  };
  const changeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setSession({ ...session, date: event.target.value });
  };
  const dispatch = useDispatch();
  const submitSession = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(createSessionThunk(session));
    resetForm();
  };

  const resetForm = () => {
    setSession(initialData);
  };

  return (
    <div className="form-container">
      <form noValidate autoComplete="off" onSubmit={submitSession}>
        <h1>Welcome! You can create your own meditation session here.</h1>
        <label htmlFor="text">Title:</label>
        <input
          type="text"
          id="text"
          value={session.title}
          onChange={changeTitle}
        />
        <label htmlFor="text">Date:</label>
        <input
          type="date"
          id="date"
          value={session.date}
          onChange={changeDate}
        />
        <label htmlFor="text">Comments:</label>
        <input
          type="text"
          id="text"
          value={session.comment}
          onChange={changeComment}
        />
        <label htmlFor="text">Please enter your media url</label>
        <input
          type="text"
          id="text"
          value={session.iFrame}
          onChange={changeIframe}
        />
        <div>
          <button className="form-button" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SessionForm;
