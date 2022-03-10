import Session from "./Session";

export interface ActionInterface {
  type?: string;
  sessions?: Session[];
  session?: Session;
}
