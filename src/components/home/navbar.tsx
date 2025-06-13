import { Menu, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent backdrop-blur-lg bo border-foreground/15">
      <div className="container px-4 py-4 mx-auto flex justify-between items-center">
        <div className="flex items-center text-lg">
          <p>Fu</p>
          <Zap size={20} />
          <p>zie</p>
        </div>

        <nav>
          <ul className="text-sm text-muted-foreground tracking-wide hidden sm:flex items-center gap-5 list-none">
            <li className="hover:text-foreground duration-200">
              <Link href="#">Products</Link>
            </li>
            <li className="hover:text-foreground duration-200">
              <Link href="#">Pricing</Link>
            </li>
            <li className="hover:text-foreground duration-200">
              <Link href="#">Clients</Link>
            </li>
            <li className="hover:text-foreground duration-200">
              <Link href="#">Resouces</Link>
            </li>
            <li className="hover:text-foreground duration-200">
              <Link href="#">Documentation</Link>
            </li>
            <li className="hover:text-foreground duration-200">
              <Link href="#">Enterprise</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button>{false ? "Dashboard" : "Get Started"}</Button>
          </Link>

          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-name">Name</Label>
                    <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-username">Username</Label>
                    <Input id="sheet-demo-username" defaultValue="@peduarte" />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Save changes</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
