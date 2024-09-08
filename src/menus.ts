// menuData.ts
import { LayoutDashboardIcon, MailIcon, ShoppingBagIcon } from "lucide-react";

export const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboardIcon,
    submenu: [{ name: "Dashboard", route: "/" }],
  },
  {
    name: "Ecommerce",
    icon: ShoppingBagIcon,
    submenu: [
      { name: "Product List", route: "/products" },
      { name: "Order List", route: "/order-list" },
      { name: "Customer List", route: "/customer-list" },
    ],
  },
  {
    name: "Email",
    icon: MailIcon,
    route: "/email",
  },
];
