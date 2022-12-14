import express from 'express';
import 'express-async-errors';
import productRoutes from './router/product.routes';
import httpError from './middleware/http.error';
import userRoutes from './router/user.routes';
import loginRoutes from './router/login.routes';
import orderRoutes from './router/orders.routes';

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use(httpError);

export default app;
