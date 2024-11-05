import Link from "next/link";
import { Leaf } from "lucide-react";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <Leaf className="h-6 w-6 text-[#F1F1F1]" />
      <span className="text-2xl font-bold text-[#F1F1F1]">EcoTrack</span>
    </Link>
  );
};

export default Logo;
