"use client";

import { SendIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
        className="flex items-center w-full bg-white rounded-t rounded-b-none border border-solid shadow border-shadowColor p-1 max-h-56"
      >
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea
                  className="bg-white border-none w-full h-10 max-h-36 resize-none px-2 py-5 focus:outline-none"
                  placeholder="Enter your message"
                  {...field}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = target.scrollHeight + "px";
                  }}
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
