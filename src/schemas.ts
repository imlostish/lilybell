import { z } from "zod";

const reasons = ["professional contact", "message", "suggestion"] as const;

export const ContactSchema = z.object({
	name: z.string().nonempty().trim().min(4).max(64),
	email: z.email(),
	subject: z.string().nonempty().trim().min(12),
	reason: z.enum(reasons),
	message: z.string().nonempty().trim().min(64).max(364),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
export type KeyofContactSchema = keyof ContactSchemaType;
