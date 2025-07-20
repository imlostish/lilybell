import type { ContactSchemaType } from "@/schemas";

export const ContactTemplate = (data: ContactSchemaType) => {
	return <div>{JSON.stringify(data)}</div>;
};
