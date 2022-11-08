import { Request, Response } from 'express';
import UserService from '../service/user.service';

export default class UserController {
  constructor(private userService = new UserService()) {}

  async createUser(req: Request, res: Response): Promise<void> {
    const { body } = req;
    const token = await this.userService.createUser(body);

    res.status(201).json({ token });
  }

  async login(req: Request, res: Response): Promise<void> {
    const { body } = req;
    const token = await this.userService.validateLogin(body);
    res.status(200).json({ token });
  }
}