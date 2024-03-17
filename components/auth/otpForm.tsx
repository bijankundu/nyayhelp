"use client";

import { Fragment } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Edit } from "lucide-react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const OtpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <>
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl font-bold">Verify Phone</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400 flex gap-2 items-center">
          <p>{`We have sent an OTP to`}</p>
          <div className="flex justify-center items-center gap-1 font-bold">
            <p>{"+91 9813651213"}</p>
            <span className="h-[14px] cursor-pointer">
              <Edit className="h-full w-full" />
            </span>
          </div>
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
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP
                      maxLength={6}
                      render={({ slots }) => (
                        <InputOTPGroup className="gap-2">
                          {slots.map((slot, index) => (
                            <Fragment key={index}>
                              <InputOTPSlot
                                className="rounded-md border"
                                {...slot}
                              />
                              {index !== slots.length - 1 && (
                                <InputOTPSeparator />
                              )}
                            </Fragment>
                          ))}
                        </InputOTPGroup>
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Didn&apos;t receive the OTP?{" "}
                    <span className="text-primary underline cursor-pointer">
                      Resend
                    </span>
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Verify
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
};

export default OtpForm;
