import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard/DetailCard";
import { clearDetailSessionAction } from "../redux/actions/actionsCreators";
import { RootState } from "../redux/reducers";
import {
  deleteSessionThunk,
  loadOneSessionThunk,
} from "../redux/thunks/sessionsThunks";
import { Session } from "../types/Session";

const DetailSessionPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const sessionDetail: Session = useSelector(
    (state: RootState) => state.currentSession
  );

  useEffect(() => {
    const clearSession = () => {
      dispatch(clearDetailSessionAction());
    };
    dispatch(loadOneSessionThunk(id as string));
    return clearSession;
  }, [dispatch, id]);

  const deleteSession = () => {
    dispatch(deleteSessionThunk(id as string));
  };
  return (
    <>
      <DetailCard
        session={sessionDetail}
        actionOnClick={() => {
          deleteSession();
        }}
      />
    </>
  );
};

export default DetailSessionPage;
