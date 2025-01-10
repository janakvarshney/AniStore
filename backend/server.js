import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';


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
app.use('/api/product',productRouter);  //This is the productRouter



app.get('/', (req, res) => {
        res.send("API WORKING")
})
app.listen(port, () => console.log(`Listening on localhost:${port}`))