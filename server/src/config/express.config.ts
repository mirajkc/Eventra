import express, { type Application } from "express"
import cors from 'cors'
import helmet from "helmet"
import rateLimit from 'express-rate-limit';
import cookieParser  from 'cookie-parser'
import errorHandler from "../middleware/errorhandler.middleware.ts";
import notFound from "../notfound.ts";
import router from "../route/route.ts";
import emailService from "../service/email.service.ts";
import connectCloudinary from "./connect.cloudinary.config.ts";
const app:Application = express()

app.use(cors())
app.use(helmet())
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, 
  limit : 10000
}))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
connectCloudinary()
emailService
app.get('/' , (req,res)=>{
  res.json({
    message : "Server is working"
  })
})
app.use('/api/v1', router)
app.use(notFound)
app.use(errorHandler)
export default app