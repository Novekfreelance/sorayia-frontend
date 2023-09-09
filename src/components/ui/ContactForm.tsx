'use client';
import { Button } from "./button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from "./form";
import { Input } from "./input";
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "./textarea";

const FormSchema = z.object({
	name: z.string().min(2, {
		message: "Username must be at least 2 characters",
	}),
	email: z
	.string()
	.min(1, {
		message: "Email is required"
	})
	.email({
		message: "Invalid email"
	}),
	message: z
	.string()
	.min(2, {
		message: "Message must be at least 2 characters"
	}),
});

const onSubmit = () => {
	console.log('Form submit good');

}

const ContactForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 mx-auto">
				<div className="space-y-9">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input type="text" placeholder="Your name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Your mail" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea className="resize-none" placeholder="Message" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="text-end mt-8">
				<Button className="text-xl bg-primary-300 hover:bg-primary-300 py-7 uppercase" type="submit">Submit</Button>
				</div>
			</form>
		</Form>
	)
}

export default ContactForm