import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res)=> res.send({title:'Get all users '}))

userRouter.get('/:id',(req,res)=> res.send({title:'Get a user details '}))


userRouter.post('/',(req,res)=> res.send({title:'create a user '}))

userRouter.put('/:id',(req,res)=> res.send({title:'Update a user '}))

userRouter.delete('/:id',(req,res)=> res.send({title:'Delete a user '}))

export default userRouter;