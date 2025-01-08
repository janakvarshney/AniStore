import express from 'express' ;
import { userLogin,adminLogin,userRegistry } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login', userLogin);
userRouter.post('/register', userRegistry);
userRouter.post('/admin', adminLogin);

export default userRouter;