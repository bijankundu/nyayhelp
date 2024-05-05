import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SheetFooter } from "@/components/ui/sheet";

import { getCurrentUser } from "@/api/user";

interface IMobileBottomSheetFooterProps {
  authCookie: string;
}

const MobileBottomSheetFooter: React.FC<
  IMobileBottomSheetFooterProps
> = async ({ authCookie }) => {
  const { user } = await getCurrentUser(authCookie);
  const { userName = "", phoneNumber = "" } = user || {
    userName: "",
    phoneNumber: "",
  };

  return (
    <SheetFooter className="mt-auto">
      <div className="flex gap-3 items-center">
        <Avatar className="h-10 w-10 border">
          <AvatarImage
            src={`https://api.dicebear.com/8.x/identicon/svg?seed=$asdasd}`}
            alt="User avatar"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          {userName && (
            <p className="text-sm font-medium leading-none">{userName}</p>
          )}
          {phoneNumber && (
            <p className="text-xs leading-none text-muted-foreground">
              {phoneNumber}
            </p>
          )}
        </div>
      </div>
    </SheetFooter>
  );
};

export default MobileBottomSheetFooter;
