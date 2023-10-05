"use client";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
});

const onSubmit = () => {
  console.log("Form submit good");
};

//Sign Up form
const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <span className="absolute top-2/4 -translate-y-2/4 translate-x-2/4">
                    <svg
                      width={25}
                      height={25}
                      fill="#999999"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7Z" />
                    </svg>
                  </span>
                  <Input
                    className="bg-gray-100 rounded py-7 pl-14"
                    placeholder="Email"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center mt-6">
          <Button
            className="bg-primary uppercase text-white border-2 border-white rounded-[2.5rem] text-2xl py-7 px-14 w-full"
            type="submit"
          >
            Get the link
          </Button>
        </div>
        <Link
          className="underline hover:underline-offset-4 transition-all max-w-fit mx-auto text-primary block underline-offset-8 mt-12"
          href="/sign-in"
        >
          You remember your password
        </Link>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
