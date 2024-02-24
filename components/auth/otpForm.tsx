"use client";

import { OTPInput } from "@/components/ui/pinInput";
import * as React from "react";

export default function OtpInputDemo() {
  const [otp, setOtp] = React.useState("123456");
  return (
    <div className="space-y-4">
      <OTPInput value={otp} onChange={setOtp} />
    </div>
  );
}
