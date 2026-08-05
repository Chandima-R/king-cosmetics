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
        href: "/categories/hair-care",
      },
      {
        label: "Skin Care",
        href: "/categories/skin-care",
      },
      {
        label: "Body Care",
        href: "/categories/body-care",
      },
      {
        label: "Herbal Oils",
        href: "/categories/herbal-oils",
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