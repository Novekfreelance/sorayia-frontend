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

const FormSchema = z.object({
	email: z
		.string()
		.email({
			message: "Invalid email"
		}),
});

const onSubmit = () => {
	console.log('Form submit good');

}

const NewsLetterForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex w-full max-w-sm items-center space-x-2">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input className="min-w-[300px] border border-solid border-primary" type="text" placeholder="Email adress" {...field} />
							</FormControl>
							<FormMessage className="absolute" />
						</FormItem>
					)}
				/>
				<Button className="text-xl bg-primary px-3" type="submit">Ok</Button>
			</form>
		</Form>
	)
}

export default NewsLetterForm