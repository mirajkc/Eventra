import type { Request, Response, NextFunction } from "express";
export default function authorize({ role }: {
    role?: "CUSTOMER" | "ADMIN";
}): (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=authorize.middleware.d.ts.map