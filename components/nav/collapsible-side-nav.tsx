import { PanelLeft } from "lucide-react";
import Link from "next/link";
import { FC, useMemo } from "react";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { navData } from "@/data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { isRouteActive } from "@/lib";

const CollapsibleSideNav = () => {
  const pathname = usePathname();
  const NavRender = useMemo(() => {
    return navData.map((item) => {
      return (
        <CollapsibleSideNavButton
          key={item.link}
          link={item.link}
          icon={item.icon}
          label={item.title}
          active={isRouteActive(item.link, pathname)}
        />
      );
    });
  }, []);
  return (
    <Dialog>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid  gap-6 text-lg font-medium">{NavRender}</nav>
        </SheetContent>
      </Sheet>
    </Dialog>
  );
};

const CollapsibleSideNavButton: FC<{
  link: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}> = ({ link, icon, label, active }) => {
  return (
    <Link
      href="#"
      className={cn(
        "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
        { "text-foreground": active }
      )}
    >
      {icon}
      {label}
    </Link>
  );
};

export default CollapsibleSideNav;
