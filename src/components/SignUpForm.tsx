"use client";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z.string().min(2, {
    message: "#",
  }),
});

const onSubmit = () => {
  console.log("Form submit good");
};

//Sign Up form
const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <span className="absolute top-2/4 -translate-y-2/4 translate-x-2/4">
                      <svg
                        width={30}
                        height={30}
                        fill="#999999"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2a4.505 4.505 0 0 0-4.5 4.5ZM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17Z" />
                      </svg>
                    </span>
                    <Input
                      className="bg-gray-100 rounded py-7 pl-14"
                      type="text"
                      placeholder="Name"
                      {...field}
                    />
                  </div>
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
                  <div className="relative">
                    <span className="absolute top-2/4 -translate-y-2/4 translate-x-2/4">
                      <svg
                        width={30}
                        height={30}
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <span className="absolute top-2/4 -translate-y-2/4 translate-x-2/4">
                      <svg
                        width={30}
                        height={30}
                        fill="#999999"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8ZM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7Z" />
                      </svg>
                    </span>

                    <Input
                      className="bg-gray-100 rounded py-7 pl-14"
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="text-center mt-6">
          <Button
            className="bg-primary uppercase text-white border-2 border-white rounded-[2.5rem] text-2xl py-7 px-14 min-w-[255px]"
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
