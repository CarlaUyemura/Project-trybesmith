import { Router } from 'express';
import UserController from '../controller/user.controller';

const loginRouter = Router();
const userController = new UserController();

loginRouter.post('/', userController.login.bind(userController));

export default loginRouter;