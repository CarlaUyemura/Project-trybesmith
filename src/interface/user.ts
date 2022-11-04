export interface User {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserId extends User{
  id: number;
}