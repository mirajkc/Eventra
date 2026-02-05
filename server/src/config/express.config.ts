import express, { type Application } from "express"
import cors from 'cors'
import helmet from "helmet"
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser'
import errorHandler from "../middleware/errorhandler.middleware.js";
import notFound from "../notfound.js";
import router from "../route/route.js";
import emailService from "../service/email.service.js";
import enviroment from "./enviroment.config.js";

const app: Application = express()

app.use(cors({
  origin: [enviroment.clientURL, "http://localhost:3000", "http://localhost:5173","https://eventra-admin-dashboard.vercel.app"],
  credentials: true
}));
app.use(helmet())
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10000
}))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
emailService
app.get('/', (req, res) => {
  res.json({
    message: "Server is working"
  })
})
app.use('/api/v1', router)
app.use(notFound)
app.use(errorHandler)
export default app