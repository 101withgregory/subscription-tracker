import { Router } from "express";
import { createSubscription, getAllSubscriptions, getUserSubscriptions } from "../controllers/subscription.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',getAllSubscriptions)
subscriptionRouter.get('/:id',(req, res)=>res.send({title:'Get a subscription details'}))
subscriptionRouter.post('/',authorize,createSubscription)
subscriptionRouter.put('/:id ',(req, res)=>res.send({title:'update subscriptions'}))
subscriptionRouter.delete('/:id ',(req, res)=>res.send({title:'delete subscriptions'}))
subscriptionRouter.get('/user/:id',authorize, getUserSubscriptions)
subscriptionRouter.put('/:id/cancel ',(req, res)=>res.send({title:'cancel subscriptions'}))

subscriptionRouter.get('/upcoming-renewals',(req, res)=>res.send({title:'get upcoming subscriptions'}))

export default subscriptionRouter;