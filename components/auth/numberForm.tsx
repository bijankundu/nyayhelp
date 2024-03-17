"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
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
import { useToast } from "@/components/ui/use-toast";

import { phoneRegex } from "@/constants";
import { FormFlowTypes, LoginFormNumber } from "./loginForm";

import { sendOTP } from "@/api/auth";

const FormSchema = z.object({
  phoneNumber: z
    .string({
      required_error: "Phone number is required.",
    })
    .regex(phoneRegex, {
      message: "Please enter a valid phone number.",
    }),
});

interface NumberFormProps {
  setFormFlow: (formFlow: FormFlowTypes) => void;
  phoneNumber: LoginFormNumber | undefined;
  setPhoneNumber: (phoneNumber: LoginFormNumber) => void;
}

const NumberForm: React.FC<NumberFormProps> = ({
  setFormFlow,
  phoneNumber,
  setPhoneNumber,
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { phoneNumber: phoneNumber?.number || "" },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    console.log(data);
    const { phoneNumber } = data;
    setPhoneNumber({ extension: "+91", number: phoneNumber });
    try {
      const data = await sendOTP({ extension: "+91", number: phoneNumber });
      console.log(
        "🚀 ~ file: numberForm.tsx ~ line 61 ~ onSubmit ~ data",
        data
      );
      toast({
        title: "OTP sent successfully",
        description: "We have sent an OTP to your phone number",
      });
      setFormFlow("otpForm");
    } catch (error) {
      console.error(
        "🚀 ~ file: numberForm.tsx ~ line 61 ~ onSubmit ~ error",
        error
      );
      toast({
        title: "Failed to send OTP",
        description: "Please try again",
      });
    } finally {
      setLoading(false);
    }
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

            <Button type="submit" className="w-full" loading={loading}>
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
};

export default NumberForm;
