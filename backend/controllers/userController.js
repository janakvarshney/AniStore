import validator from 'validator';
import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET);
}

//route for user login
const userLogin = async (req, res) => {
        try {
                const { email, password } = req.body;
                //checking if user exists or not
                const user = await userModel.findOne({ email });

                if (!user) {
                        return res.status(400).json({ success: false, message: "User not found !!" });
                }

                const isMatch = await bcrypt.compare(password, user.password);

                if (isMatch) {
                        const token = createToken(user._id);
                        res.json({ success: true, token });
                }
                else {
                        return res.status(400).json({ success: false, message: "Invalid credentials" });
                }


        } catch (error) {
                console.log(error);
                res.json({ success: false, message: error.message });

        }
}


//route for user registry
const userRegistry = async (req, res) => {
        try {
                const { name, email, password } = req.body;
                //checking if already exists or not
                const exists = await userModel.findOne({ email });

                if (exists) {
                        return res.status(400).json({ success: false, message: "User already exists" });
                }

                //verifying email and strong password
                if (!validator.isEmail(email)) {
                        return res.status(400).json({ success: false, message: "Invalid email" });
                }
                if (password.length < 6) {
                        return res.status(400).json({ success: false, message: "Password too short" });
                }

                //hashing user password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                const newUser = new userModel({
                        name,
                        email,
                        password: hashedPassword
                })

                const user = await newUser.save();

                const token = createToken(user._id);
                res.json({ success: true, token });


        } catch (error) {
                console.log(error);
                res.json({ success: false, message: error.message });
        }
}

//route for admin login 
const adminLogin = async (req, res) => {

}



export { userLogin, userRegistry, adminLogin };