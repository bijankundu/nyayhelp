"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import { Card } from "@/components/ui/card";

const OtpForm = dynamic(() => import("@/components/auth/otpForm"));
const NumberForm = dynamic(() => import("@/components/auth/numberForm"));

const LoginForm = () => {
  return (
    <Card>
      {/* <OtpForm /> */}
      <NumberForm />
    </Card>
  );
};

export default LoginForm;
