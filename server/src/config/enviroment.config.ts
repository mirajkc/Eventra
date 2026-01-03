import 'dotenv/config'
class Enviroment {
  portNumber : number = Number(process.env.PORT) || 9000
}
const enviroment = new Enviroment()
export default enviroment