import express from 'express';
import connectDB from './config/db.mjs';  
import itemRouter from './routes/itemRoutes.mjs';  
import userRouter from './routes/userRoutes.mjs'; 


const app = express();
app.use(express.json());
connectDB();

app.use('/api/items', itemRouter);  
app.use('/api/users', userRouter);  

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
