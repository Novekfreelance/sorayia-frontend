"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Avatar name is required",
    })
});

const UploadAvatarForm = () => {
	const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
		}
  });

	const onSubmit =  () => {
		// setIsLoading(true);
		router.refresh();
		router.push("/dashboard/avatar");
	};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4"
      >
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className="w-full min-w-[300px] border border-solid border-primary"
										type="text"
										placeholder="Enter Your Avatar Name"
										{...field}
									/>
								</FormControl>
								<FormMessage className="absolute" />
							</FormItem>
						)}
					/>
					<Button className="text-xl bg-primary rounded w-full" type="submit">
						{/* {isLoading ? <Spinner /> : "Upload Avatar"} */}
						Upload Avatar
					</Button>
      </form>
    </Form>
  );
};

export default UploadAvatarForm;
