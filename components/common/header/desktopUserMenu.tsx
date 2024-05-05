import React from "react";
import Link from "next/link";
import { LogOut, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getCurrentUser } from "@/api/user";

interface IDesktopUserMenuProps {
  authCookie: string;
}

const DesktopUserMenu: React.FC<IDesktopUserMenuProps> = async ({
  authCookie,
}) => {
  const { user } = await getCurrentUser(authCookie);

  const { userName = "", phoneNumber = "" } = user || {
    userName: "",
    phoneNumber: "",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={`https://api.dicebear.com/8.x/identicon/svg?seed=${userName}`}
              alt="User avatar"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            {userName && (
              <p className="text-sm font-medium leading-none">{userName}</p>
            )}
            {phoneNumber && (
              <p className="text-xs leading-none text-muted-foreground">
                {phoneNumber}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/profile`}>
            <DropdownMenuItem>
              <User className="h-4 w-4 mr-2" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        {/* <DropdownMenuSeparator /> */}
        <Link href={`/logout`}>
          <DropdownMenuItem>
            <LogOut className="h-4 w-4 mr-2" />
            <span>Log out</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DesktopUserMenu;
