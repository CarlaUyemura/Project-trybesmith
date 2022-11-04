import jwt from 'jsonwebtoken';
// import { Login } from '../interface/login';
import { User, UserId } from '../interface/user';
import UserModel from '../models/user.model';
import HttpException from '../utils/HttpException';

export default class UserService {
  constructor(private userModel = new UserModel()) {}

  public jwt = jwt;

  async createUser(user: User): Promise<string> {
    const { username, level, classe, password } = user;
    const newUser = await this.userModel.createUser(username, classe, level, password);
    if (!newUser) {
      throw new HttpException(400, 'Failed to register new user');
    }
    return this.createToken(newUser);
  }

  async createToken(user: UserId) {
    const payload = {
      id: user.id,
      username: user.username,
    };
    const token = this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '7d' },
    );
    return token;
  }
}