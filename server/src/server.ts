import http from 'http'
import app from './config/express.config.ts'
import enviroment from './config/enviroment.config.ts'
import { error } from 'console'

const server = http.createServer(app)
const port = enviroment.portNumber
const host = '127.0.0.1'
server.listen(port, host, ()=>{
  console.log(`Server is listening on PORT: ${port}`);
})
server.on("error", (error)=>{
  console.log(error.message);
})