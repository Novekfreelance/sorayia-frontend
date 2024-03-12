"use client";

import UserStore from "@/app/store/AuthStore";
import Spinner from "@/components/icons/Spinner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Folder name requeried",
  }),
});

interface NewFolderFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

//Sign Up form
const NewForlderForm = ({ open, setOpen }: NewFolderFormProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { token } = UserStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    // Post resquest
    try {
      const create_response = await fetch(
        "https://sorayia-backend.onrender.com/api/create_folder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            name: values.name,
          }),
        }
      );
      if (create_response.status === 200) {
        router.refresh();
        form.reset();
        setOpen(false);
        // toast({
        //   title: "Success",
        //   description: "Folder created successfully",
        //   variant: "success",
        // });
      } else {
        // toast({
        //   title: "Error",
        //   description: "An error occurred while creating the folder",
        //   variant: "destructive",
        // });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7">
            <FormField
              control={form.control}
              name="name"
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
              <DialogFooter>
                <Button
                  className="bg-primary uppercase text-white border-2 border-none rounded text-xl-600 py-2 px-6"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner /> : "Create Folder"}
                </Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewForlderForm;
