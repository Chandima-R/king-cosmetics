import {
  BadgeCheck,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import { WhyChooseUsItem } from "@/types/landing/why-choose-us";

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 1,
    title: "100% Natural Ingredients",
    description:
      "Carefully selected herbal and plant-based ingredients for everyday care.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Quality You Can Trust",
    description:
      "Every product is prepared with high quality standards.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Visible Natural Care",
    description:
      "Gentle formulas for healthier looking hair and skin.",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Made with Care",
    description:
      "Every product is made with passion and dedication.",
    icon: HeartHandshake,
  },
  {
    id: 5,
    title: "Quality Assured",
    description:
      "Products are carefully checked before delivery.",
    icon: BadgeCheck,
  },
  {
    id: 6,
    title: "Islandwide Delivery",
    description:
      "Fast delivery service across Sri Lanka.",
    icon: Truck,
  },
];