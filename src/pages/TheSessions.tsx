import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import {
  deleteSessionThunk,
  loadSessionsThunk,
} from "../redux/thunks/sessionsThunks";
import styled from "styled-components";
import SessionCard from "../components/SessionCardComponent/SessionCard";
import ClipLoader from "react-spinners/ClipLoader";
import { primary } from "../styles/globalStyles";

const TheSessions = (): JSX.Element => {
  const sessions = useSelector((state: RootState) => state.sessions);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(loadSessionsThunk);
    if (sessions.length > 1) {
      setIsLoading(false);
    }
  }, [dispatch, sessions.length]);

  const deleteSession = (id: string) => {
    dispatch(deleteSessionThunk(id));
  };

  return (
    <>
      <MainSection>
        {isLoading ? (
          <section className="loading_container">
            <p className="loading">Loading...</p>
            <ClipLoader color={primary} size={150} />
          </section>
        ) : (
          <ul>
            {sessions.map((session) => (
              <SessionCard
                session={session}
                key={session.id}
                actionOnClick={() => deleteSession(session.id)}
              />
            ))}
          </ul>
        )}
      </MainSection>
    </>
  );
};
const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160px;
  .loading_container,
  p {
    align-items: center;
    text-align: center;
  }
  .loading {
    color: ${primary};
    font-size: 20px;
  }
`;
export default TheSessions;
