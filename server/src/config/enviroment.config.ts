import 'dotenv/config'
class Enviroment {
  portNumber : number = Number(process.env.PORT) || 9000
  secretKey : string = process.env.SECRET_KEY || "SECRET" 
  mode :string = process.env.MODE || "DEVELOPMENT"
}
const enviroment = new Enviroment()
export default enviroment