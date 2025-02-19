import express from 'express'; 
import {PORT} from './config/env.js'
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscriptions.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middlewares.js';
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/users',userRouter);
app.use('/api/subscriptions',subscriptionRouter);

app.use(errorMiddleware)

app.get('/',(req,res)=>{
    res.send('Welcome !')
})



app.listen(PORT,async ()=>{
    console.log(`API running on http://localhost:${PORT}`)
    await connectToDatabase()
})