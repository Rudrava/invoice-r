import { Home, Package, Package2, Users } from "lucide-react";

export const navData = [
  {
    title: "Dashboard",
    icon: <Home className="w-5 h-5" />,
    link: "/app/home",
  },
  {
    title: "Invoices",
    icon: <Package2 className="w-5 h-5" />,
    link: "/app/invoices",
  },
  {
    title: "Products",
    icon: <Package className="w-5 h-5" />,
    link: "/app/products",
  },

  {
    title: "Customers",
    icon: <Users className="w-5 h-5" />,
    link: "/app/customers",
  },
];
