import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import OtpInputDemo from "@/components/auth/otpForm";

const Login = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Enter your information to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            {/* <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email or Username</Label>
                <Input id="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link className="text-sm underline" href="#">
                    Forgot Password?
                  </Link>
                </div>
                <Input id="password" required type="password" />
              </div>
            </div> */}
            <OtpInputDemo />
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
