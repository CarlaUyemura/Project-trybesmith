import { Request, Response } from 'express';
import HttpException from '../utils/HttpException';

const httpError = (err: Error, req: Request, res: Response) => {
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default httpError;