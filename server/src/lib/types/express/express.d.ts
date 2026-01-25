declare global {
  namespace Express {
    interface Request {
      userDetails?: any
    }
  }
}

export {};