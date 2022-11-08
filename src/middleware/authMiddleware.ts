import Joi from 'joi';
import HttpException from '../utils/HttpException';
import { Login } from '../interface/login';

const verifyLogin = (params: Login) => {
  const schemaLogin = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error, value } = schemaLogin.validate(params);
 
  if (error) {
    throw new HttpException(400, error.message);
  }
  return value;
};

export default verifyLogin;
