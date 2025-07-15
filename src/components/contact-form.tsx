"use client";

import { ContactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
	const form = useForm<z.infer<typeof ContactSchema>>({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			name: "your name here",
			email: "youremailhere@gmail.com",
			subject: "",
			reason: "professional contact",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof ContactSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	const reasons = ["professional contact", "message", "suggestion"];

	return (
		<Form {...form}>
			<form
				className="grid grid-cols-1 gap-6"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormDescription></FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email address</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormDescription></FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="subject"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subject</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormDescription></FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="reason"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Reason</FormLabel>
								<FormControl>
									<Select {...field} value={field.value}>
										<SelectTrigger className="w-full">
											<SelectValue
												placeholder={field.value ?? "Select a option"}
											/>
										</SelectTrigger>
										<SelectContent>
											{reasons?.map((r) => (
												<SelectItem key={`form-reason-[${r}]`} value={r}>
													{r}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormDescription></FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea className="min-h-20 max-h-80" {...field} />
							</FormControl>
							<FormDescription></FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button>Contact me</Button>
			</form>
		</Form>
	);
};

export default ContactForm;
