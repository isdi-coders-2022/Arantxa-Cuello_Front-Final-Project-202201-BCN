import { Session } from "./Session";

export interface AnyActionInterface {
  type: string;
}

export interface loadSessionsInterface extends AnyActionInterface {
  sessions: Session[];
}
export interface deleteSessionInterface extends AnyActionInterface {
  id: string;
}

export interface createSessionInterface extends AnyActionInterface {
  session: Session;
}
