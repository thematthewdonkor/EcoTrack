import {
  Car,
  Home,
  Apple,
  BarChart2,
  Calendar,
  MoreHorizontal,
} from "lucide-react";

export const HeroActivity = [
  {
    icon: Car,
    num: "45%",
    text: "Transport Savings",
  },
  {
    icon: Home,
    num: "30%",
    text: "Energy Reduced",
  },
  {
    icon: Apple,
    num: "25%",
    text: "Food Impact",
  },
];

export const CarbonImpact = [
  {
    text: "Transport",
    value: 50,
    initial: { width: 0 },
    animate: { width: "100%" },
    transition: { delay: 0.6, duration: 1 },
    num: "50%",
  },

  {
    text: "Energy",
    value: 65,
    initial: { width: 0 },
    animate: { width: "100%" },
    transition: { delay: 0.8, duration: 1 },
    num: "65%",
  },

  {
    text: "Food",
    value: 35,
    initial: { width: 0 },
    animate: { width: "100%" },
    transition: { delay: 1, duration: 1 },
    num: "35%",
  },
];

export const AppPreviewBottomNavigation = [
  {
    icon: Home,
    text: "Home",
  },
  {
    icon: BarChart2,
    text: "Stats",
  },
  {
    icon: Calendar,
    text: "Log",
  },

  {
    icon: MoreHorizontal,
    text: "More",
  },
];
