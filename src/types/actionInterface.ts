import { Session } from "./Session";

export interface SomeActionInterface {
  type: string;
}
export interface ActionInterface {
  type: string;
  sessions: Session[];
  session: Session;
}
