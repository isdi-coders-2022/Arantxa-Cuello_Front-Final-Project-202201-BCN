import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { loadSessionsThunk } from "../redux/thunks/sessionsThunks";
import styled from "styled-components";
import SessionCard from "../components/SessionCardComponent/SessionCard";

const MyProfilePage = (): JSX.Element => {
  const sessions = useSelector((state: RootState) => state.sessions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSessionsThunk);
  }, [dispatch]);

  return (
    <>
      <MainSection>
        <ul>
          {sessions.map((session) => (
            <SessionCard session={session} key={session.title} />
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
export default MyProfilePage;
