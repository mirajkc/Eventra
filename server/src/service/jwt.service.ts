import jwt, {  } from "jsonwebtoken";
import enviroment from "../config/enviroment.config.js";
import type { IErrorTypes } from "../lib/types/errorhandler.types.js";

export  function generateToken({
  payload,
  expiresIn,
}: {payload : string, expiresIn :any}) {
  return jwt.sign(
    { userId: payload },
    enviroment.secretKey,
    { expiresIn }
  );
}


export function verifyToken(token: string) {
  try {
    return jwt.verify(token, enviroment.secretKey)
  } catch {
    throw {
      code: 401,
      message: "Invalid or expired token. Please login again.",
      status: "VERIFICATION_ERR",
    } as IErrorTypes
  }
}
