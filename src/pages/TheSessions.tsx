import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import {
  deleteSessionThunk,
  loadSessionsThunk,
} from "../redux/thunks/sessionsThunks";
import styled from "styled-components";
import SessionCard from "../components/SessionCardComponent/SessionCard";

const TheSessions = (): JSX.Element => {
  const sessions = useSelector((state: RootState) => state.sessions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSessionsThunk);
  }, [dispatch]);

  const deleteSession = (id: string) => {
    dispatch(deleteSessionThunk(id));
  };

  return (
    <>
      <MainSection>
        <ul>
          {sessions.map((session) => (
            <SessionCard
              session={session}
              key={session.id}
              actionOnClick={() => deleteSession}
            />
          ))}
        </ul>
      </MainSection>
    </>
  );
};
const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 115px;
`;
export default TheSessions;
