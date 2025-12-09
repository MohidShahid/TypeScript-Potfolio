import { ArrowUpRight } from "lucide-react";
import {Link} from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MobileNavToggle } from "./ui/resizable-navbar"

type SheetDemoProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SheetDemo({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SheetDemoProps) {
  return (
    <Sheet
      open={isMobileMenuOpen} // controlled open state
      onOpenChange={(open) => setIsMobileMenuOpen(open)} // sync state with sheet
    >
      <SheetTrigger asChild>
        <MobileNavToggle
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </SheetTrigger>

      <SheetContent side="right" className="bg-black border-none">
        <SheetHeader>
         {/* <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={50}
        height={50}
      /> */}
        </SheetHeader>
        <SheetDescription className="mt-7">

<div className="grid flex-1 auto-rows-min gap-6 px-4">
  {[
  { label: "Home", path: "/" },
  { label: "About", path: "/#resume" },
  { label: "FYP", path: "/#project" },
  { label: "All Projects", path: "/all-projects" },
  { label: "Contact", path: "/#contact" },
].map((item) => (
  <Link
    key={item.path}
    to={item.path}
    className="flex items-center py-4 px-3 border-b text-lg border-[#FFFFFF33] text-white justify-between"
    onClick={(e) => {
      setIsMobileMenuOpen(false);

      // Smooth scroll for hash links
      if (item.path.includes("#")) {
        e.preventDefault(); // prevent default navigation
        const hash = item.path.split("#")[1];
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    <p id="sidebar-items">{item.label}</p>
    <ArrowUpRight />
  </Link>
))}

</div>

</SheetDescription>
        <SheetFooter>
          {/* footer content */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

