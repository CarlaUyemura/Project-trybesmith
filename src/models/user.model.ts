import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { UserId } from '../interface/user';

export default class UserModel {
  private connection = mysql;
  
  async createUser(username: string, classe: string, level: number, password: string)
    : Promise<UserId> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const newUser = {
      id: insertId,
      username,
      classe,
      level,
      password,
    };
    return newUser;
  }
}