"use server";

import { resend } from "@/email/client";
import { ContactTemplate } from "@/email/contact-template";
import { env } from "@/env";
import type { ContactSchemaType } from "@/schemas";

export async function contactMe(sendData: ContactSchemaType): Promise<void> {
	await resend.emails.send({
		from: "Acme <onboarding@resend.dev>",
		to: [env.RESEND_TO_SEND],
		subject: sendData.subject || "Contact Form",
		react: ContactTemplate(sendData),
	});
}
