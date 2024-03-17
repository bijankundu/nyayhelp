import Image from "next/image";
import dynamic from "next/dynamic";

import loginImage from "@/assets/images/login.svg";

const LoginForm = dynamic(() => import("@/components/auth/loginForm"));

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="relative h-60 flex-1">
        <Image src={loginImage} alt="Login Image" fill />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
