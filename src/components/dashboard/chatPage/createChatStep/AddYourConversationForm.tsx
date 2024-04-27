"use client";

import Spinner from "@/components/icons/Spinner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import UserStore from "@/store/AuthStore";
import useChatDataStore from "@/store/ChatDataStore";
import CreateChatProcess from "@/store/CreateChatStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ChooseBotData from "./ChooseBotData";

const FormSchema = z.object({
  chatName: z.string().min(2, {
    message: "Chat name is requeried",
  }),
});

interface AddYourConversationFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
}

//Sign Up form
const AddYourConversationForm = ({
  open,
  setOpen,
  className,
}: AddYourConversationFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { toast } = useToast();
  const { token } = UserStore();
  const formRef = useRef<HTMLFormElement>(null);
  const { bot } = CreateChatProcess();
  const { addChat, isLoading, setIsLoading } = useChatDataStore();

  const handleButtonClick = async (values: z.infer<typeof FormSchema>) => {
    if (!formRef.current) return;
    setIsLoading(true);
    try {
      const create_response = await fetch(
        "https://sorayia-backend.onrender.com/api/create_chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            name: values.chatName,
            bot: bot.id,
          }),
        }
      );
      if (create_response.status === 200) {
        const data = await create_response.json();
        addChat(data);
        form.reset();
        setOpen(false);
        toast({
          title: "Success",
          description: "Folder created successfully",
          variant: "success",
        });
      } else {
        toast({
          title: "Error",
          description: "An error occurred while creating the folder",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl space-y-3">
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(handleButtonClick)}
            className={`mt-7 w-full ${className}`}
          >
            <FormField
              control={form.control}
              name="chatName"
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
          </form>
        </Form>
        <div>
          <h3 className="text-center text-2xl-600 mb-4">Select bot</h3>
          <ChooseBotData />
          <div className="text-end mt-1 text-white">
            <Button
              onClick={() => handleButtonClick(form.getValues())}
              className="bg-primary uppercase text-white border-2 border-none rounded text-xl-600 py-2 px-6 h-11"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? <Spinner /> : "Create Chat"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddYourConversationForm;
