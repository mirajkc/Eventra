import randomstring from 'randomstring'
export default function generateString({length= 10, charset = "alphabetic"}:{length? : number, charset? : string}){
  return randomstring.generate({
    length : length,
    charset : charset
  })
}