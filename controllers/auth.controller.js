import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'
//signUp
export const signUp = async(req, res, next)=>{
const session = await mongoose.startSession();
session.startTransaction();
try {
    console.log(req.body)
    const {name ,email, password} = req.body;
    //check if user already exists
    const existingUser = await User.findOne({email});
    if(existingUser){
        const error = new Error('User already exists');
        error.statusCode= 409
        throw error
    }
    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUsers = await User.create([{
        name,email,password:hashedPassword
    }], {session});
    const token = jwt.sign({userId: newUsers[0]._id}, JWT_SECRET, {expiresIn:String(JWT_EXPIRES_IN)});


    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
        success:true,
        message:'User created successfully',
        data:{
            token, user:newUsers[0]
        }
    })
} catch (error) { 
    await session.abortTransaction();
    session.endSession()
    next(error)
    
}
}
export const signIn = async(req, res, next)=>{
 try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw new Error("User Not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid){
        const error = new Error('Invalid Password');
        error.statusCode = 401;
        throw error;
    }
    const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn:String(JWT_EXPIRES_IN)});
    res.status(201).json({
        success:true,
        message:'You have Signed In successfully',
        data:{
            token, user
        }
    })
 } catch (error) {
    next(error)
    
 }
}
export const signOut = async(req, res, next)=>{

}