"use client";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { EmailIcon, LockIcon } from "./icons/SvgIcons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .min(8, {
      message: "Password must have than 8 characters",
    }),
});

//Sign Up form
const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn("credentials", {
      emmail: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Oops! Something when wrong!",
      });
    } else {
      router.refresh();
      router.push("/dashboard");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <span className="absolute top-2/4 -translate-y-2/4 translate-x-2/4">
                      <EmailIcon width={30} height={30} fill="#999999" />
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
                      <LockIcon width={30} height={30} fill="#999999" />
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
          <Link
            className="underline hover:underline-offset-4 transition-all max-w-fit mx-auto text-primary block underline-offset-8"
            href="/forgot-password"
          >
            Forgot your password
          </Link>
        </div>
        <div className="text-center mt-6">
          <Button
            className="bg-primary uppercase text-white border-2 border-primary rounded-[40px] text-2xl py-7 px-14 min-w-[255px]"
            type="submit"
          >
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
