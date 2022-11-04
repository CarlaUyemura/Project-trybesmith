import { Router } from 'express';
import UserController from '../controller/user.controller';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', userController.createUser.bind(userController));

export default userRouter;