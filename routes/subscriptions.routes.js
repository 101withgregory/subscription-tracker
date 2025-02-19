import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req, res)=>res.send({title:'Get all subscriptions'}))
subscriptionRouter.get('/:id',(req, res)=>res.send({title:'Get a subscription details'}))
subscriptionRouter.post('/',(req, res)=>res.send({title:'create a subscription'}))
subscriptionRouter.put('/:id ',(req, res)=>res.send({title:'update subscriptions'}))
subscriptionRouter.delete('/:id ',(req, res)=>res.send({title:'delete subscriptions'}))
subscriptionRouter.get('/user/:id',(req, res)=>res.send({title:'get all of a user subscriptions'}))
subscriptionRouter.put('/:id/cancel ',(req, res)=>res.send({title:'cancel subscriptions'}))

subscriptionRouter.get('/upcoming-renewals',(req, res)=>res.send({title:'get upcoming subscriptions'}))

export default subscriptionRouter;