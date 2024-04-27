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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import UseProcessContext from "@/store/CreateBotStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const CreateBotForm = () => {
  const { preferences, setPreferences, setStep } = UseProcessContext();

  const FormSchema = z.object({
    name: z.string().min(1, {
      message: "Username must be at least 2 characters",
    }),
    prompt: z.string().min(1, {
      message: "Type must be at least one choice",
    }),
    description: z.string().min(1, {
      message: "Description must be at least 2 characters",
    }),
    language: z.string().min(1, {
      message: "Language must be at least one choice",
    }),
    model: z.string().min(1, {
      message: "Model must be at least one choice",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: preferences,
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setPreferences(data);
    console.log();
    setStep("2");
  };

  return (
    <Form {...form}>
      <div className="w-full flex justify-center items-center">
        <form className="w-8/12" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center gap-1 space-y-0">
                    <FormLabel>Bot Name</FormLabel>
                    <FormControl>
                      <Input
                        className="max-w-2xl focus:border-primary-300 outline-none"
                        autoFocus={true}
                        type="text"
                        placeholder="Bot Name"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center gap-1 space-y-0">
                    <FormLabel>Bot Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={preferences.prompt}
                    >
                      <FormControl>
                        <SelectTrigger className="max-w-2xl h-[50px] focus:border-primary-300 focus:ring-0 focus:ring-offset-0">
                          <SelectValue placeholder="Select a type of bot" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Relation Client</SelectItem>
                        <SelectItem value="2">Formation en Ligne</SelectItem>
                        <SelectItem value="3">Spécialiste RH</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center gap-1 space-y-0">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none max-w-2xl focus:border-primary-300 outline-none"
                        placeholder="bot description"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center gap-1 space-y-0">
                    <FormLabel>Language</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={preferences.language}
                    >
                      <FormControl>
                        <SelectTrigger className="max-w-2xl h-[50px] focus:border-primary-foreground focus:ring-0 focus:ring-offset-0">
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={preferences.model}
                      className="grid grid-cols-3 gap-4 pt-3"
                    >
                      <FormItem
                        className={cn(
                          `flex items-center space-y-0 relative rounded model`
                        )}
                      >
                        <FormControl>
                          <RadioGroupItem
                            value="OpenAI GPT3.5"
                            className="opacity-0 absolute left-0 top-0"
                          />
                        </FormControl>
                        <FormLabel className="h-44 p-4 space-y-3 cursor-pointer bg-gray-100 rounded">
                          <h3 className="text-2xl-600 text-primary text-center">
                            GPT-3.5
                          </h3>
                          <p className="text-xl text-primary text-center">
                            The fastest and cheapest model good for most use
                            cases.
                          </p>
                        </FormLabel>
                      </FormItem>
                      <FormItem
                        className={cn(
                          `flex items-center space-y-0 bg-gray-30 relative rounded model`
                        )}
                      >
                        <FormControl>
                          <RadioGroupItem
                            value="OpenAI GPT3.5 16k"
                            className="opacity-0 absolute left-0 top-0"
                          />
                        </FormControl>
                        <FormLabel className=" h-44 p-4 space-y-3 cursor-pointer bg-gray-100 rounded">
                          <h3 className="text-2xl-600 text-primary text-center">
                            GPT-3.5 16K
                          </h3>
                          <p className="text-xl text-primary text-center">
                            Ideal for multi-document synthesis and comprehensive
                            responses.
                          </p>
                        </FormLabel>
                      </FormItem>
                      <FormItem
                        className={cn(
                          `flex items-center space-y-0 bg-gray-300 relative rounded model`
                        )}
                      >
                        <FormControl>
                          <RadioGroupItem
                            value="OpenAI GPT4"
                            className="opacity-0 absolute left-0 top-0"
                          />
                        </FormControl>
                        <FormLabel className="h-44 py-4 cursor-pointer space-y-3 bg-gray-100 rounded">
                          <h3 className="text-2xl-600 text-primary mb-2 text-center">
                            GPT-4
                          </h3>
                          <p className="text-xl text-primary text-center">
                            More powerful but slower model for advanced
                            reasoning or content creation need.
                          </p>
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex justify-end mt-7">
            <Button
              className="text-xl bg-primary hover:bg-primary-300 py-7 uppercase"
              type="submit"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default CreateBotForm;
