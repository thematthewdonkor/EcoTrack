"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  return (
    <div className="lg:w-full xl:w-full h-16 flex items-center justify-between px-4">
      <Logo />
      <div className="flex items-center gap-4">
        {/* Show Log In and Sign Up buttons on screens larger than small */}
        <div className="hidden sm:flex gap-2">
          <Button variant="ghost" className="text-[#F1F1F1]">
            Log In
          </Button>
          <Button
            className="bg-[#F1F1F1] text-emerald-600"
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
        </div>
      </div>
      {/* Show MobileNav only on small screens */}
      <div className="sm:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
