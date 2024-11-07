"use client";

import { motion } from "framer-motion";

import { Search, Plus, Car, Leaf, Zap } from "lucide-react";

import { AppPreviewBottomNavigation, CarbonImpact } from "@/app/constants";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import AppPreviewHeader from "./app-preview-header";

const AppPreview = () => {
  const MotionProgress = motion.create(Progress);
  return (
    <div className="relative flex items-center justify-center md:justify-end">
      <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
        <div
          className="overflow-hidden rounded-[2.5rem] border-[8px]
         border-white/10 bg-white shadow-xl backdrop-blur-sm"
        >
          <div className="relative h-[600px] w-full overflow-hidden bg-gray-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              <AppPreviewHeader />
              {/* Carbon Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6 rounded-xl bg-white p-4 shadow-sm"
              >
                <h3 className="mb-4 text-sm font-medium text-gray-600">
                  Carbon Impact
                </h3>
                <div className="grid gap-4">
                  {CarbonImpact.map((item) => (
                    <div
                      className="flex items-center justify-between"
                      key={item.text}
                    >
                      <span className="text-sm text-green-600">
                        {item.text}
                      </span>
                      <div className="w-32">
                        <MotionProgress
                          initial={item.initial}
                          animate={item.animate}
                          transition={item.transition}
                          value={item.value}
                          className="h-2"
                        />
                      </div>
                      <span className="text-sm font-medium">{item.num}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Progress Indicators */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-green-600" />
                    <span className="text-lg font-semibold">2.5 kg</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-600">
                    Daily carbon saved
                  </p>
                  <div className="mt-2 h-1 w-full rounded-full bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ delay: 1.4, duration: 1 }}
                      className="h-full rounded-full bg-green-500"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      <span className="text-lg font-semibold">4</span>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-1 text-xs text-gray-600">
                    Eco actions today
                  </p>
                </motion.div>
              </div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="relative mb-6"
              >
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Log an activity..."
                  className="w-full rounded-full bg-white py-2 pl-10 pr-4 text-sm shadow-sm outline-none focus:ring-2 focus:ring-green-500"
                />
              </motion.div>

              {/* Bottom Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-0 left-0 right-0 flex justify-around border-t bg-white p-4"
              >
                {AppPreviewBottomNavigation.map((item) => (
                  <div key={item.text}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="flex flex-col items-center gap-1"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-xs">{item.text}</span>
                    </Button>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div
          className="absolute -left-4 -top-4 h-72 w-72 animate-pulse 
        rounded-full bg-green-400/30 blur-3xl"
        />
        <div
          className="absolute -bottom-4 -right-4 h-72 w-72 animate-pulse 
        rounded-full bg-emerald-400/30 blur-3xl"
        />
      </div>
    </div>
  );
};

export default AppPreview;
