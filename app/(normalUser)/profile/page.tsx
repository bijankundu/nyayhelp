import { Cake } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { checkIsAuthenticated } from "@/helpers";
import { getCurrentUser } from "@/api/user";

dayjs.extend(relativeTime);

const Page = async () => {
  const { authCookie } = checkIsAuthenticated();
  const { user } = await getCurrentUser(authCookie as string);

  const {
    userName = "",
    phoneNumber = "",
    name = "",
  } = user || {
    userName: "",
    phoneNumber: "",
    name: "",
  };

  return (
    <div className="w-screen h-[85vh] flex items-center justify-center">
      <Card className="min-w-[350px]">
        <CardContent className="pt-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src={`https://api.dicebear.com/8.x/identicon/svg?seed=${userName}`}
                alt="User avatar"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>

            <div className="text-left">
              <h4 className="font-semibold text-xl">{name}</h4>
              <p className="text-gray-700 text-sm">{userName}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center text-gray-600">
            <Cake className="h-5 w-5" />
            <p>Member for: {dayjs("2018-09-11T18:30:00.000Z").fromNow(true)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
