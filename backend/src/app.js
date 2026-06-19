import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.routes.js';

connectDB();

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors(
  {
    origin: '*'
  }
));
app.use(express.json());
app.use('/api/auth', authRoutes);


export default app;