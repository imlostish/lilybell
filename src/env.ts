import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		RESEND_API_KEY: z.string({
			error: "%> [RESEND_API_KEY MISSING]: Please add your resend api key ",
		}),
		RESEND_TO_SEND: z.string({
			error:
				"%> [RESEND_TO_SEND MISSING]: Please add your resend to send email address",
		}),
	},
	client: {},
	// If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
	runtimeEnv: {
		RESEND_API_KEY: process.env.RESEND_API_KEY,
		RESEND_TO_SEND: process.env.RESEND_TO_SEND,
	},
	// For Next.js >= 13.4.4, you only need to destructure client variables:
	// experimental__runtimeEnv: {
	//   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
	// }
});
