"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { phoneRegex } from "@/constants";

const FormSchema = z.object({
  phoneNumber: z
    .string({
      required_error: "Phone number is required.",
    })
    .regex(phoneRegex, {
      message: "Please enter a valid phone number.",
    }),
});

const NumberForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { phoneNumber: "" },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <>
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl font-bold">Hi, Welcome</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Enter your phone number to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="flex gap-1">
                      <Select onValueChange={() => {}} defaultValue="+91">
                        <SelectTrigger className="w-20 h-12">
                          <SelectValue>+91</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+91">+91</SelectItem>
                        </SelectContent>
                      </Select>

                      <Input
                        type="tel"
                        placeholder="Phone number"
                        className="h-12"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
};

export default NumberForm;
