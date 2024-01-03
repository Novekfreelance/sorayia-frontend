"use client";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import Spinner from "./icons/Spinner";

const FormSchema = z.object({
  code: z.string().length(6, {message: "Code must be 6 characters",})
});


const EmailVerificationForm = () => {
	const router = useRouter();
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState(false);
	
  const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			code: "",
		}
  });
	
	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		const id = localStorage.getItem("userId");
		setIsLoading(true);
		try {
			const response = await fetch(
				`https://sorayia-backend.onrender.com/api/validate_email`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						id: "59fa21f5-fc09-4b19-ad67-f6ccd1d20826",
						code: "362207"
					}),
				}
			);
			if (response.status === 200) {
				toast({
					title: "Success",
					description: "Email verified successfully",
					variant: "success",
				});

				// Redirect to sign in page
				router.push("/sign-in");
				router.refresh();
			} else {
				toast({
					title: "Error",
					description: "Invalid code",
					variant: "destructive",
				});
				console.log(values.code + " " + id);
			}
	} catch(error) {
	} finally {
		setIsLoading(false);
	};
	};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-sm items-center space-x-2 mx-auto"
      >
				<div className="flex flex-col items-center w-full space-y-4">
					<FormField
						control={form.control}
						name="code"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										className="w-full border border-solid border-primary text-center input-no-spin rounded-[40px] bg-gray-100"
										type="number"
										onInput={(e) => {
											const target = e.target as HTMLInputElement;
											target.value = target.value
												if(target.value.length > 6) {
													target.value = target.value.slice(0, 6);
												}
										}}
										placeholder="_ _ _ _ _ _"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="text-xl text-center bg-primary px-3 w-full rounded-[40px] mt-3" type="submit">
						{isLoading ? <Spinner /> : "Verify"}
					</Button>
				</div>
      </form>
    </Form>
  );
};

export default EmailVerificationForm;
