import React from "react";
import { Link } from "react-router-dom";
import { BriefcaseIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-gray-100 px-4 sm:px-6">
        <Link to="#" className="flex items-center gap-2 text-lg font-semibold">
          <BriefcaseIcon className="h-6 w-6" />
          <a href="/" className="text-2xl font-bold text-blue-600">  
            <span className="font-extrabold"></span>Placify
          </a>
        </Link>
        {/* <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }}
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Logged in as John Doe</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
      </header>
    </>

    // <div>
    //   <header className="bg-primary text-primary-foreground py-4 px-6">
    //     <h1 className="text-2xl font-bold">TnP Portal</h1>
    //   </header>
    // </div>
  );
}

export default Header;
