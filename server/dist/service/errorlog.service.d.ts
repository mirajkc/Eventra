declare class ErrorLogService {
    getErrorLogs(skip: number, take: number, filter: {
        message?: {
            contains: string;
        };
    }): Promise<{
        id: string;
        code: number;
        message: string;
        status: string;
    }[]>;
    getErrorLogsCount(filter: {
        message?: {
            contains: string;
        };
    }): Promise<number>;
}
declare const errorLogService: ErrorLogService;
export default errorLogService;
//# sourceMappingURL=errorlog.service.d.ts.map