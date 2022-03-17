export interface Session {
  title: string;
  date: string;
  comment: string;
  iFrame: string;
  id: string;
}
export interface NewSession {
  title: string;

  comment: string;
  iFrame: string;
}
export interface SessionProps {
  session: Session;
  onClick: React.MouseEventHandler;
}

export interface SessionsArrayProps {
  sessions: Session[];
}
