import { HeroActivity } from "@/app/constants";
import AppPreview from "./app-preview";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="container relative z-10">
        <div className="grid gap-8 py-12 md:grid-cols-2 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div
              className="flex items-center gap-2 rounded-full
             bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              <Leaf className="h-4 w-4" />
              <span>#1 carbon footprint tracker</span>
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Track your impact on the planet
            </h1>

            <p className="mt-6 text-lg text-white/80 md:text-xl">
              Monitor and reduce your carbon footprint with AI-powered insights.
              Track daily activities, get personalized recommendations, and make
              a real difference.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-white/90"
              >
                Start Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-center text-white">
              {HeroActivity.map((activity) => (
                <div key={activity.text}>
                  <activity.icon className="mx-auto h-8 w-8" />
                  <p className="mt-2 text-2xl font-bold">{activity.num}</p>
                  <p className="text-sm text-white/60">{activity.text}</p>
                </div>
              ))}
            </div>
          </div>
          <AppPreview />
        </div>
      </div>
    </div>
  );
};

export default Hero;
