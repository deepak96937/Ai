import User from "../models/user.model";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import genToken from "../config/token.js";


export const signUp = async(req, res)=>{
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        const existEmail = await User.findOne({ email });
        if(existEmail){
            return res.status(400).json({message: "Email already exists"});
        }

        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters long"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        const token = genToken(user._id)

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 10 * 24 * 60 * 60 * 1000 ,
            sameSite:"strict",
            secure: false
        });
        
        return res.status(201).json({user})


    } catch (error) {
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
}


export const Login = async(req, res)=>{
    try {
        const { email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({message: "Email does not exists"});
        }

    
        const isMatch = await bcrypt.compare(password, user.password);
    
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = genToken(user._id)

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 10 * 24 * 60 * 60 * 1000 ,
            sameSite:"strict",
            secure: false
        });
        
        return res.status(201).json({user})


    } catch (error) {
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
}

export const Logout = async(req, res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
}