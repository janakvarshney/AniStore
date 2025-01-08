import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';


//App Config
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();


//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/user',userRouter);        //This is the userRouter

app.get('/', (req, res) => {
        res.send("API WORKING")
})
app.listen(port, () => console.log(`Listening on localhost:${port}`))