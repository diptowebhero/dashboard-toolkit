// menuData.ts
import { LayoutDashboardIcon, MailIcon } from "lucide-react";

export const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboardIcon,
    submenu: [
      { name: "Admin Dashboard", route: "/" },
      { name: "Sales Dashboard", route: "/sales" },
    ],
  },
  {
    name: "Ecommerce",
    icon: LayoutDashboardIcon,
    submenu: [{ name: "Product List", route: "/products" }],
  },
  {
    name: "Email",
    icon: MailIcon,
    route: "/email",
  },
];
