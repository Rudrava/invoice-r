import { Home, Package2, Users } from "lucide-react";

export const navData = [
  {
    title: "Dashboard",
    icon: <Home className="w-5 h-5" />,
    link: "/",
  },
  {
    title: "Invoices",
    icon: <Package2 className="w-5 h-5" />,
    link: "/invoices",
  },

  {
    title: "Customers",
    icon: <Users className="w-5 h-5" />,
    link: "/customers",
  },
];
