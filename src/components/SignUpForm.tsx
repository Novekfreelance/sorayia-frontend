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
// import ky from "ky";

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
  // const router = useRouter();
  // const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    // const url = "/api/register";
    // const body = JSON.stringify(values);
    // try {
    //   const response = await ky.post(url, { json: body });
    //   if (response.status === 201) {
    //     toast({ description: "Account created", variant: "success" });
    //     router.push("/sign-in");
    //     router.refresh();
    //   } else {
    //     toast({ description: "Something went wrong", variant: "destructive" });
    //   }
    // } catch (error) {
    //   toast({ description: "Something went wrong", variant: "destructive" });
    // }
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
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
