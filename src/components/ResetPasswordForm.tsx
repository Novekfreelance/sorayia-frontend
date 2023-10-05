"use client";
import { Button } from "./ui/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/Form";
import { Input } from "./ui/Input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  password: z.string().min(2, {
    message: "#",
  }),
  ConfirmPassword: z.string().min(2, {
    message: "#",
  }),
});

const onSubmit = () => {
  console.log("Form submit good");
};

//Sign Up form
const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-5">
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
                        placeholder="New Password"
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
              name="ConfirmPassword"
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
                        placeholder="Confirm your new Password"
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
              className="bg-primary uppercase text-white border-2 border-primary rounded-[40px] text-2xl py-7 px-14 w-full"
              type="submit"
            >
              Reset Password
            </Button>
          </div>
        </form>
      </Form>
  );
};

export default SignInForm;
