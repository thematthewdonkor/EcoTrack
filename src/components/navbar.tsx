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

  const handleSignInClick = () => {
    router.push("/signin");
  };

  return (
    <div className="lg:w-full xl:w-full h-16 flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12">
      <Logo />
      <div className="flex items-center gap-4">
        {/* Show Log In and Sign Up buttons on screens larger than small */}
        <div className="hidden md:flex gap-2">
          <Button
            variant="ghost"
            className="text-[#F1F1F1]"
            onClick={handleSignInClick}
          >
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
      <div className=" md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
