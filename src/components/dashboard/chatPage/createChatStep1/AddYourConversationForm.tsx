"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  YourFolderName: z.string().min(2, {
    message: "Chat name is requeried",
  }),
});

const onSubmit = () => {
  // Post resquest

  console.log("Form submit good");
};

//Sign Up form
const AddYourConversationForm = ({ className }: { className?: string }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`mt-7 ${className}`}
      >
        <FormField
          control={form.control}
          name="YourFolderName"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-3">
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-100 rounded py-3"
                    type="text"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-end mt-6 text-white">
          <Button
            className="bg-primary uppercase text-white border-2 border-none rounded text-xl-600 py-2 px-6"
            type="submit"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddYourConversationForm;