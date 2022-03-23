import { useState, ChangeEvent, SyntheticEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createSessionThunk } from "../../redux/thunks/sessionsThunks";
import { primary } from "../../styles/globalStyles";
import { NewSession } from "../../types/Session";
import toast, { Toaster } from "react-hot-toast";

const SessionForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialData: NewSession = {
    title: "",
    comment: "",
    iFrame: "",
  };
  const form = useRef(null);
  const [session, setSession] = useState(initialData);

  const changeData = (event: ChangeEvent<HTMLInputElement>) => {
    setSession({ ...session, [event.target.id]: event.target.value });
  };
  const changeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSession({ ...session, [event.target.id]: event.target.value });
  };

  const submitSession = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(createSessionThunk(session));

    resetForm();
    setTimeout(goToAllSessions, 2000);
  };

  const resetForm = () => {
    setSession(initialData);
  };
  const notify = () => toast("Session sent!");
  const goToAllSessions = () => {
    navigate("/allsessions");
  };

  return (
    <Form className="form-container">
      <form noValidate autoComplete="off" onSubmit={submitSession} ref={form}>
        <h3>Welcome! You can create your own meditation session here.</h3>

        <div className="form-data">
          <label htmlFor="text"></label>
          <input
            placeholder="Title"
            name="title"
            type="text"
            id="title"
            value={session.title}
            onChange={changeData}
          />
        </div>

        <div className="form-data">
          <label htmlFor="text"></label>
          <textarea
            placeholder="Comment"
            name="comment"
            id="comment"
            value={session.comment}
            onChange={changeComment}
          />
        </div>
        <div className="form-data">
          <label htmlFor="text"></label>
          <input
            placeholder="Enter your media URL"
            name="iFrame"
            type="text"
            id="iFrame"
            value={session.iFrame}
            onChange={changeData}
          />
        </div>
        <div className="send-button">
          <button className="form-button" onClick={notify} type="submit">
            Send
          </button>
          <Toaster />
        </div>
      </form>
    </Form>
  );
};
const Form = styled.main`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .form-data {
    text-align: center;
  }
  input,
  textarea {
    background-color: #e4dada;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    text-align: center;
  }
  h3 {
    padding: 20px;
    color: ${primary};
  }
  button {
    border-radius: 20px;
    border: 1px solid #57a9ec;
    background-color: ${primary};
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .send-button {
    text-align: center;
    margin-top: 10px;
  }
`;
export default SessionForm;
