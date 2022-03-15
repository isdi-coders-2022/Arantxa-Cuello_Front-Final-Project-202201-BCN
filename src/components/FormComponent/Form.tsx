import { MouseEventHandler, useState, ChangeEvent } from "react";

const SessionForm = (): JSX.Element => {
  const [session, setSession] = useState({
    title: "",
    comment: "",
    iFrame: "",
  });

  const isFormInvalid = session.iFrame === "";

  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setSession({ ...session, title: event.target.value });
  };

  const submitSession = (event) => {
    event.preventDefault();
    createSession(session);
  };

  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        <h1>Welcome! You can create your own meditation session here.</h1>
        <label htmlFor="text">Title:</label>
        <input
          type="text"
          id="text"
          value={session.title}
          onChange={changeTitle}
        />
        <label htmlFor="text">Comment:</label>
        <input type="text" id="text" value={session.comment} />
      </form>
    </div>
  );
};

export default SessionForm;
