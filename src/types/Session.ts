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
export interface EditSession extends NewSession {
  id: string;
}

export interface NewCard {
  title: string;
  date: string;
  comment: string;
  iFrame: string;
  onClick: React.MouseEventHandler<SVGSVGElement>;
}
export interface SessionProps {
  session: Session;
  actionOnClick: React.MouseEventHandler<SVGSVGElement>;
}

export interface SessionsArrayProps {
  sessions: Session[];
}
