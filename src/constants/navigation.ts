import type { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/products",
    children: [
      {
        label: "All Products",
        href: "/products",
      },
      {
        label: "Hair Care",
        href: "/products?category=Hair+Care",
      },
      {
        label: "Skin Care",
        href: "/products?category=Skin+Care",
      },
      {
        label: "Body Care",
        href: "products?category=Body+Care",
      },
      
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Ingredients",
    href: "/ingredients",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];