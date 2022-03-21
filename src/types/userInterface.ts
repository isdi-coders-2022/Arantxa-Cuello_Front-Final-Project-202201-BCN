import { Session } from "./Session";

export interface User {
  name: string;
  username: string;
  id: string;
  loggedIn: boolean;
  sessions?: Session[];
}

export interface LoginUser {
  username: string;
  password: string;
  token?: string;
  loggedIn: boolean;
  id?: string;
}

export interface RegisterUser {
  name: string;
  username: string;
  password: string;
}

export interface DecodedToken {
  username: string;
  id: string;
  iat: number;
}
