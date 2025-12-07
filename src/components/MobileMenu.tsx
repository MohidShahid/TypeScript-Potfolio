import { ArrowUpRight } from "lucide-react";
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

      <SheetContent side="right" className="bg-black">
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
    { label: "About", path: "#resume" },
    { label: "Project", path: "#project" },
    { label: "Project Details", path: "/all-projects" },
    { label: "Contact", path: "#contact" },
  ].map((item) => (
    <a
      key={item.path}
      href={item.path}
      className="flex items-center py-5 px-4 border-b text-2xl border-[#FFFFFF33] text-white justify-between"
      onClick={()=> setIsMobileMenuOpen(false)}
    >
      <p id="sidebar-items">{item.label}</p>
      <ArrowUpRight />
    </a>
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

