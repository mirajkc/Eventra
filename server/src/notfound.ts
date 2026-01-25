import type {Request,Response,  NextFunction } from "express";
export default function notFound(req:Request,res:Response,next:NextFunction){
  try {
    throw {
    code : 404, 
    message : "The page you are seraching for does not exist",
    status : "NOT_FOUND_ERR"
  }
  } catch (exception) {
   next(exception) 
  }
}