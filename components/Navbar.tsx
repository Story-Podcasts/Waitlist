"use client"
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-black text-2xl flex"
            >
              STORYPODS
            </a>
          </NavigationMenuItem>

          <div className="flex gap-2 items-center">
            <span>More Updates on</span>
            <a
              rel="noreferrer noopener"
              href="https://x.com/StoryPods_"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              Twitter
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5 ml-2"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a
              rel="noreferrer noopener"
              href="https://github.com/Story-Podcasts"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              Github
              <GitHubLogoIcon className="ml-2 w-5 h-5" />
            </a>

          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};