import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/reducers";
import {
  loadOneSessionThunk,
  updateSessionThunk,
} from "../redux/thunks/sessionsThunks";
import { primary } from "../styles/globalStyles";
import { EditSession } from "../types/Session";
import toast, { Toaster } from "react-hot-toast";

const UpdateSession = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessiontoUpdate: EditSession = useSelector(
    (state: RootState) => state.currentSession
  );

  useEffect(() => {
    dispatch(loadOneSessionThunk(id as string));
  }, [dispatch, id]);

  useEffect(() => {
    setSession({
      title: sessiontoUpdate.title,
      comment: sessiontoUpdate.comment,
      iFrame: sessiontoUpdate.iFrame,
      id: sessiontoUpdate.id,
    });
  }, [
    sessiontoUpdate.comment,
    sessiontoUpdate.iFrame,
    sessiontoUpdate.id,
    sessiontoUpdate.title,
  ]);

  const initialData: EditSession = {
    title: sessiontoUpdate.title,
    comment: sessiontoUpdate.comment,
    iFrame: sessiontoUpdate.iFrame,
    id: sessiontoUpdate.id,
  };
  const [session, setSession] = useState(initialData);

  const changeData = (event: ChangeEvent<HTMLInputElement>) => {
    setSession({ ...session, [event.target.id]: event.target.value });
  };
  const changeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSession({ ...session, [event.target.id]: event.target.value });
  };

  const submitSession = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(updateSessionThunk(session, navigate));
  };
  const notify = () => toast("Session edited!");

  return (
    <Form className="form-container">
      <form noValidate autoComplete="off" onSubmit={submitSession}>
        <h1>Edit your session here.</h1>
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
          <button className="form-button" type="submit" onClick={notify}>
            Update
          </button>
          <Toaster />
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
export default UpdateSession;
