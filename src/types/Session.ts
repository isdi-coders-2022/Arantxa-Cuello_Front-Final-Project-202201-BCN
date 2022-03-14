export interface Session {
  title: string;
  date: string;
  comment: string;
  iFrame: string;
  id: string;
  onDelete?: React.MouseEventHandler;
}

export interface SessionProps {
  session: Session;
  onClick: React.MouseEventHandler;
}

export interface SessionsArrayProps {
  sessions: Session[];
}
