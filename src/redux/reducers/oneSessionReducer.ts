import {
  AnyActionInterface,
  loadOneSessionInterface,
} from "../../types/actionsInterface";
import { Session } from "../../types/Session";
import actionsTypes from "../actions/actionsTypes";

const oneSessionReducer = (
  currentSession: Session,
  action: AnyActionInterface | loadOneSessionInterface = {
    type: "",
  }
) => {
  let newCurrentSession: Session;

  switch (action.type) {
    case actionsTypes.loadOneSession:
      newCurrentSession = { ...(action as loadOneSessionInterface).session };
      break;
    default:
      newCurrentSession = { ...currentSession };
  }
  return newCurrentSession;
};

export default oneSessionReducer;
