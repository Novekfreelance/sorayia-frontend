"use client";

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
import UserStore from "@/store/AuthStore";
import useContentDataStore from "@/store/ContentDataStore";
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

interface EditForlderFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
}

//Sign Up form
const EditForlderForm = ({ open, setOpen, id }: EditForlderFormProps) => {
  const { updateData } = useContentDataStore();

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
        "https://sorayia-backend.onrender.com/api/update_folder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            name: values.name,
            folder_id: id,
          }),
        }
      );
      if (create_response.status === 200) {
        const UpdatedData = await create_response.json();
        updateData(UpdatedData);
        form.reset();
        setOpen(false);
        toast({
          title: "Success",
          description: "Folder updated successfully",
          variant: "success",
        });
      } else {
        toast({
          title: "Error",
          description: "An error occurred while updating the folder",
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
                        placeholder="Enter new folder name"
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
                  {isLoading ? <Spinner /> : "Update Folder"}
                </Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditForlderForm;
