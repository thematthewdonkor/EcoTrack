"use client";

import { motion } from "framer-motion";
import {
  Search,
  Home,
  BarChart2,
  Calendar,
  MoreHorizontal,
  Plus,
  Car,
  Leaf,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const AppPreview = () => {
  const MotionProgress = motion(Progress);
  return (
    <div className="relative flex items-center justify-center md:justify-end">
      <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
        <div className="overflow-hidden rounded-[2.5rem] border-[8px] border-white/10 bg-white shadow-xl backdrop-blur-sm">
          <div className="relative h-[600px] w-full overflow-hidden bg-gray-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-green-100">
                    <Leaf className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-green-600" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="font-semibold">We're so happy</h2>
                    <p className="text-sm text-gray-600">to see you again!</p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="relative"
                >
                  <Button size="icon" variant="ghost">
                    <Zap className="h-5 w-5" />
                  </Button>
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                    2
                  </span>
                </motion.div>
              </div>

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
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600">Transport</span>
                    <div className="w-32">
                      <MotionProgress
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.6, duration: 1 }}
                        value={50}
                        className="h-2"
                      />
                    </div>
                    <span className="text-sm font-medium">50%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600">Energy</span>
                    <div className="w-32">
                      <MotionProgress
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 1 }}
                        value={35}
                        className="h-2"
                      />
                    </div>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-600">Food</span>
                    <div className="w-32">
                      <MotionProgress
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 1 }}
                        value={65}
                        className="h-2"
                      />
                    </div>
                    <span className="text-sm font-medium">65%</span>
                  </div>
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
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex flex-col items-center gap-1"
                >
                  <Home className="h-5 w-5" />
                  <span className="text-xs">Home</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex flex-col items-center gap-1"
                >
                  <BarChart2 className="h-5 w-5" />
                  <span className="text-xs">Stats</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex flex-col items-center gap-1"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="text-xs">Log</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex flex-col items-center gap-1"
                >
                  <MoreHorizontal className="h-5 w-5" />
                  <span className="text-xs">More</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -left-4 -top-4 h-72 w-72 animate-pulse rounded-full bg-green-400/30 blur-3xl" />
        <div className="absolute -bottom-4 -right-4 h-72 w-72 animate-pulse rounded-full bg-emerald-400/30 blur-3xl" />
      </div>
    </div>
  );
};

export default AppPreview;
