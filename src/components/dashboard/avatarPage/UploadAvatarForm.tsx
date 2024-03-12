"use client";
import UserStore from "@/app/store/AuthStore";
import Spinner from "@/components/icons/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Avatar name is required",
  }),
});

const UploadAvatarForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { token } = UserStore();
  const avatarUrl = localStorage.getItem("avatarUrl");
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://sorayia-backend.onrender.com/api/create_avatar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            name: values.name,
            url: avatarUrl,
          }),
        }
      );
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Email verified successfully",
          variant: "success",
        });
        router.refresh();
        router.push("/dashboard/avatar");
        localStorage.removeItem("avatarUrl");
      } else {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
          {isLoading ? <Spinner /> : "Upload Avatar"}
        </Button>
      </form>
    </Form>
  );
};

export default UploadAvatarForm;
