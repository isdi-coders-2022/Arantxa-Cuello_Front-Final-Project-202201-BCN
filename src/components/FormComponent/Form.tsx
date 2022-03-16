import { useState, ChangeEvent, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createSessionThunk } from "../../redux/thunks/sessionsThunks";
import { primary } from "../../styles/globalStyles";

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
  const changeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
  const Form = styled.main`
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      padding: 10px;
      color: ${primary};
      font-size: 20px;
      font-weight: normal;
    }
  `;

  return (
    <Form className="form-container">
      <form noValidate autoComplete="off" onSubmit={submitSession}>
        <h1>Welcome! You can create your own meditation session here.</h1>
        <div>
          <label htmlFor="text">Title</label>
          <input
            type="text"
            id="text"
            value={session.title}
            onChange={changeTitle}
          />
        </div>
        <div>
          <label htmlFor="text">Date</label>
          <input
            type="date"
            id="date"
            value={session.date}
            onChange={changeDate}
          />
        </div>
        <div>
          <label htmlFor="text">Comments</label>
          <textarea
            id="text"
            value={session.comment}
            onChange={changeComment}
          />
        </div>
        <div>
          <label htmlFor="text">Enter your media url</label>
          <input
            type="text"
            id="text"
            value={session.iFrame}
            onChange={changeIframe}
          />
        </div>
        <div>
          <button className="form-button" type="submit">
            Send
          </button>
        </div>
      </form>
    </Form>
  );
};

export default SessionForm;
