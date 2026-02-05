export interface IErrorLog {
  id: string,
  code: number,
  message: string,
  status: string,
}

export interface IErrorLogPagination {
 page: number,
 limit: number,
 total: number,
 hasNextPage: boolean,
 hasPreviousPage: boolean  
}