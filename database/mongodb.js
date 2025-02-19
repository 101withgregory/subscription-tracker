import mongoose from "mongoose"
import { URI } from "../config/env.js"

if(!URI){
    throw new Error ('Please define the mONgoDB URI')
}

//connect
const connectToDatabase = async()=>{
    try {
        await mongoose.connect(URI)
        console.log('Connection Successfull')
    } catch (error) {
        console.error('Error connecting to database:',error)
        process.exit(1)
    }
}

export default connectToDatabase