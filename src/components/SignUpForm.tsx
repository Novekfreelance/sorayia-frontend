"use client";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailIcon, LockIcon, UserIcon } from "./icons/SvgIcons";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import Spinner from "./icons/Spinner";

const FormSchema = z.object({
  username: z.string().min(2, {
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
const SignUpForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://sorayia-backend.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password,
          }),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        const userId = data.id;
        localStorage.setItem("userId", userId);
        toast({
          title: "Sucess",
          description: "Registration successful",
          variant: "success"
        });

        // Redirect to email verify page
        router.push("/email-verification");
        router.refresh();
      } else if (response.status === 400) {
        const errorData = await response.json();
        const errorMessages = [];
  
        if (errorData.username) {
          errorMessages.push(errorData.username[0]);
        }
  
        if (errorData.email) {
          errorMessages.push(errorData.email[0]);
        }
  
        toast({
          title: "Error",
          description: errorMessages.join(", "),
          variant: "destructive"
        });
      } else {
        toast({
          title: "Oops",
          description: "An error occurred",
          variant: "destructive"
        });
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        toast({
          title: "Format error",
          description: "Error reading data from server",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Request error",
          description: "An error occurred during the query",
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <span className="absolute top-2/4 -translate-y-2/4 translate-x-2/4">
                      <UserIcon width={30} height={30} fill="#999999" />
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
        </div>
        <div className="text-center mt-6">

          <Button
            className="bg-primary uppercase text-white border-2 border-white rounded-[2.5rem] text-2xl py-7 px-14 min-w-[255px]"
            type="submit"
          >
            {isLoading ? <Spinner /> : "Sign Up"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
