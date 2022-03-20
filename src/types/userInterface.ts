export interface User {
  name: string;
  username: string;
  id: string;
  loggedIn: boolean;
}

export interface LoginUser {
  username: string;
  password: string;
  token?: string;
}

export interface RegisterUser {
  name: string;
  username: string;
  password: string;
}
