import Session from "./Session";

export interface AnyActionInterface {
  type?: string;
}

export interface loadSessionsInterface extends AnyActionInterface {
  session: Session[];
}
