export interface Session {
  title: string;
  date: string;
  comment: string;
}

export interface SessionProps {
  session: Session;
  onClick: React.MouseEventHandler;
}

export interface SessionsArrayProps {
  sessions: Session[];
}
