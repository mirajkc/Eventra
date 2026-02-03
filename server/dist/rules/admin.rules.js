import Joi from "joi";
export const adminReasonDTO = Joi.object({
    reason: Joi.string().required().min(10).max(100).messages({
        "string.empty": "Reason is required",
        "string.min": "Reason must be at least 10 characters long",
        "string.max": "Reason must be at most 500 characters long"
    })
});
//# sourceMappingURL=admin.rules.js.map