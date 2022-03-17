import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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
    setIsLoading(false);
  }, [dispatch]);

  const deleteSession = (id: string) => {
    dispatch(deleteSessionThunk(id));
  };

  return (
    <>
      <MainSection>
        {isLoading ? (
          <ClipLoader color={primary} size={150} />
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
`;
export default TheSessions;
