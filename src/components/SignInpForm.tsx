"use client";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { EmailIcon, LockIcon } from "./icons/SvgIcons";
import {FormSchema} from "@/constants/SignInFormSchemaConstant";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import Spinner from "./icons/Spinner";
import useUserStore from "@/app/store/AuthStore";

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const {setUser} = useUserStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit =async (values:z.infer<typeof FormSchema> ) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://sorayia-backend.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        setUser(data.user);
        toast({
          title: "Success",
          description: "Sign in successfully",
          variant: "success",
        });
        router.push("/dashboard/chat");
        router.refresh();
      } else {
        toast({
          title: "Error",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

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
            {isLoading ? <Spinner /> : "Sign In"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
