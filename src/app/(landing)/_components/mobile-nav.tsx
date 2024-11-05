import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="
        sm:hidden
         text-white"
          variant="ghost"
          size="icon"
        >
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] bg-gradient-to-b from-green-500 to-emerald-700"
      >
        <nav className="flex flex-col gap-4">
          <Link
            href="#"
            className="text-lg font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Reports
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          <Button
            className="bg-[#F1F1F1] text-emerald-600 hover:bg-none"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Button>
          <Button
            variant="outline"
            className="w-full bg-inherit text-white"
            onClick={() => setIsOpen(false)}
          >
            Log In
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
