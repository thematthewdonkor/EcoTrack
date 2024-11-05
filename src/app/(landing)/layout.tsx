import Navbar from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-gradient-to-b from-green-500 to-emerald-700">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default LandingLayout;
