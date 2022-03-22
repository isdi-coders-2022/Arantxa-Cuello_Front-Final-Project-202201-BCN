import { useState, ChangeEvent, SyntheticEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createSessionThunk } from "../../redux/thunks/sessionsThunks";
import { primary } from "../../styles/globalStyles";
import { ToastContainer, toast } from "react-toastify";
import { NewSession } from "../../types/Session";

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
        <h1>Welcome! You can create your own meditation session here.</h1>
        <div>
          <label htmlFor="text">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            value={session.title}
            onChange={changeData}
          />
        </div>

        <div>
          <label htmlFor="text">Comment</label>
          <textarea
            name="comment"
            id="comment"
            value={session.comment}
            onChange={changeComment}
          />
        </div>
        <div>
          <label htmlFor="text">Enter your media url</label>
          <input
            name="iFrame"
            type="text"
            id="iFrame"
            value={session.iFrame}
            onChange={changeData}
          />
        </div>
        <div>
          <button className="form-button" onClick={notify} type="submit">
            Send
          </button>
          <ToastContainer />
        </div>
      </form>
    </Form>
  );
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
export default SessionForm;
