"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { SendIcon } from "@/components/icons/SvgIcons";

type ChatInputProps = {
  chatID: string;
};

const FormSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt required",
  }),
});

const onSubmit = () => {
  console.log("Form submit good");
};

const ChatInput: FC<ChatInputProps> = ({ chatID }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full bg-white rounded-t rounded-b-none border border-solid shadow border-shadowColor p-1"
      >
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea
                  className="bg-transparent border-none w-full min-h-[48px] h-12 max-h-[200px] resize-none p-2 focus:outline-none"
                  placeholder="Enter your message"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <Button
          className="text-xl bg-transparent px-3 hover:bg-accent"
          type="submit"
        >
          <SendIcon height={25} width={25} fill="#1D3E80" />
        </Button>
      </form>
    </Form>
  );
};

export default ChatInput;
