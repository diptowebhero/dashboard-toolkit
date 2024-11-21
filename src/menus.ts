// menuData.ts
import {
  CommandIcon,
  Component,
  LayoutDashboardIcon,
  LayoutTemplate,
  Lock,
} from "lucide-react";

export const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboardIcon,
    submenu: [{ name: "Dashboard", route: "/" }],
  },
  {
    name: "Templates",
    icon: LayoutTemplate,
    route: "/templates",
  },
  {
    name: "Forms",
    icon: Component,
    submenu: [
      { name: "Input", route: "/input" },
      { name: "TextArea", route: "/textarea" },
      { name: "Strong-Password", route: "/strong-password" },
      { name: "Range", route: "/range" },
      { name: "Checkbox", route: "/checkbox" },
      { name: "Radio", route: "/radio" },
    ],
  },
  {
    name: "Commons",
    icon: CommandIcon,
    submenu: [
      { name: "Button", route: "/button" },
      { name: "Modal", route: "/modal" },
      { name: "Card", route: "/cards" },
    ],
  },

  {
    name: "Authentications",
    icon: Lock,
    submenu: [
      { name: "Sign In", route: "/signIn" },
      { name: "Signup", route: "/signup" },
      { name: "Forget Password", route: "/forget-password" },
      { name: "Reset Password", route: "/reset-password" },
    ],
  },
];
