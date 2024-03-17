"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import { Card } from "@/components/ui/card";

const OtpForm = dynamic(() => import("@/components/auth/otpForm"));
const NumberForm = dynamic(() => import("@/components/auth/numberForm"));

export type FormFlowTypes = "numberForm" | "otpForm";
export type LoginFormNumber = {
  extension: string;
  number: string;
};

const LoginForm = () => {
  const [formFlow, setFormFlow] = useState<FormFlowTypes>("numberForm");
  const [phoneNumber, setPhoneNumber] = useState<LoginFormNumber>({
    extension: "+91",
    number: "",
  });

  const commonProps = {
    setFormFlow,
  };

  const getFormComponent = (formFlow: FormFlowTypes) => {
    switch (formFlow) {
      case "numberForm":
        return (
          <NumberForm
            {...commonProps}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        );
      case "otpForm":
        return <OtpForm {...commonProps} phoneNumber={phoneNumber} />;
      default:
        return (
          <NumberForm
            {...commonProps}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        );
    }
  };

  return <Card>{getFormComponent(formFlow)}</Card>;
};

export default LoginForm;
