import z from "zod";

export const chatMessageDTO = z.object({
    message: z.string().min(1).max(100).nonempty("Message is required"),
})