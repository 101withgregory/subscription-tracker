import { EMAIL_PASSWORD } from "./env"; 
import nodemailer from 'nodemailer'

const accountEmail = 'gregoryonyando3560@gmail.com'
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:accountEmail,
        pass:EMAIL_PASSWORD
    }
})

export default transporter