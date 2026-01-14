import Joi from "joi";
export default function validator(schema) {
    return async (req, res, next) => {
        try {
            const data = req.body;
            if (!data || Object.keys(data).length === 0) {
                throw {
                    code: 400,
                    message: "Payload is empty.",
                    status: "EMPTY_PAYLOAD_ERR",
                };
            }
            await schema.validateAsync(data, { abortEarly: false });
            next();
        }
        catch (err) {
            let errorInstance = err;
            if (err instanceof Joi.ValidationError) {
                const details = {};
                err.details.forEach((e) => {
                    if (e.context?.key) {
                        details[e.context.key] = e.message;
                    }
                });
                errorInstance = {
                    code: 400,
                    message: "Validation Failed",
                    status: "VALIDATION_FAILED_ERR",
                    data: details,
                };
            }
            next(errorInstance);
        }
    };
}
//# sourceMappingURL=validator.middleware.js.map