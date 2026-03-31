"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  //   MobileNavToggle,
  //   MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { SheetDemo } from "./MobileMenu";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { HoverArrow } from "./ui/BouncingArrow";
import { Button } from "./ui/button";
import Haffi2 from "../assets/haffi2.png";
import { ArrowUpRight } from "lucide-react"; // Right-up arrow icon
import { LinkedIn, Email, Github } from "@/assets/SocialIcon";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "all-projects",
    },
    {
      name: "Resume",
      link: "/#resume",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  interface NavItem {
    name: string;
    link: string;
  }

  const onNavItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    console.log("Clicked:", event.target);

    // optional: custom logic
    // e.preventDefault(); (already handled inside NavItems)

    // manual navigation (if you want)
    window.location.href = item.link;
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={onNavItemClick} />
          <div className="flex items-center gap-4">
            <div className="hover:text-white text-black flex items-center justify-center gap-0">
              <Link
                to="/#contact"
                onClick={(e) => {
                  // Smooth scroll for hash links
                  if ("/#contact".includes("#")) {
                    e.preventDefault(); // prevent default navigation
                    const hash = "/#contact".split("#")[1];
                    const el = document.getElementById(hash);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <NavbarButton
                  variant="secondary"
                  className="text-black text-md SyneClass hover:text-white"
                >
                  Let's Talk
                </NavbarButton>
              </Link>

              <ArrowUpRight size={20} />
            </div>

            {/* <NavbarButton variant="primary">Book a call</NavbarButton> */}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <SheetDemo
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </MobileNavHeader>
        </MobileNav>
      </div>

      {/* Separator */}
      {!isMobileMenuOpen && (
        <div className="mx-auto max-w-7xl pt-3">
          <Separator className="w-full" />
        </div>
      )}
    </Navbar>
  );
}

export const HeroSection = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-12 flex flex-col md:flex-row items-start md:items-center md:justify-between SyneClass gap-12 relative overflow-visible">
      {/* Left Side - Text Content */}
      <div className="flex flex-col items-start text-left space-y-8 w-full md:w-1/2">
        {/* Heading Line + Title */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-px bg-black dark:bg-white"></div>
          <h1 className="text-2xl sm:text-3xl font-bold">Hello, I'm ✌</h1>
        </div>

        {/* Name Section */}
        <div className="text-7xl md:text-[132px] font-bold leading-none relative">
          <div>
            <span className="relative inline-flex items-center">
              {/* Circle behind word */}
              <span className="absolute w-16 h-16 md:w-40 md:h-40 bg-[#FFB646] rounded-full -top-3 md:-top-7 -left-2 md:-left-4 z-0"></span>
              <span className="relative z-10">Haffi</span>
            </span>
            <span className="block">Irfan</span>
          </div>
          <p className="text-lg sm:text-[24px] mt-4 font-semibold text-gray-800">
            AI Engineer | Based in Pakistan
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto pr-2.5">
          <Button
            className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold rounded-xl sm:w-auto"
            size={"xl"}
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let&apos;s Talk
            <HoverArrow />
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold rounded-xl sm:w-auto border border-black dark:border-white bg-transparent hover:bg-black hover:text-white transition-colors"
            size={"xl"}
            onClick={() => {
              const el = document.getElementById("project");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            My Work
            <HoverArrow />
          </Button>
        </div>

        {/* Stats + Social Icons */}
        <div className="flex sm:flex-row items-start sm:items-center md:justify-start gap-12 mt-6 w-full">
          {/* Stats */}
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold">1.2k+</h2>
            <p className="text-sm text-gray-600 leading-tight">
              Hours of Coding<br />Practice
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 opacity-90">
            <LinkedIn className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
            <Github className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
            <Email className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Right Side - Image Container (Clean Circle Portrait) */}
      <div className="relative w-full md:w-[45%] flex justify-center items-center mt-12 md:mt-8 px-4">
        <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center">

          {/* Background Glow Aura */}
          <div className="absolute inset-[-10%] bg-[#FFB646]/20 rounded-full blur-[100px] -z-20 animate-pulse" />

          {/* Circular Portrait with Glowing Border */}
          <div className="relative w-full h-full rounded-full border-[10px] md:border-[14px] border-[#FFB646] shadow-[0_0_50px_rgba(255,182,70,0.4)] overflow-hidden bg-gray-200 bg-transparent">
            <img
              src={Haffi2}
              alt="Haffi Irfan"
              className="w-[68%] h-[78%] ml-[60px] md:ml-24 mt-14 object-cover object-top scale-[1.3] translate-y-4 transition-transform duration-700 hover:scale-[1.4]"
              loading="lazy"
            />
          </div>

          {/* Minimal Experience Tag */}
          {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FFB646] rounded-xl px-6 py-2 shadow-2xl">
            <p className="text-xs md:text-sm font-bold text-black uppercase tracking-widest text-nowrap">AI Engineer & Expert ✨</p>
          </div> */}

        </div>
      </div>
    </div>
  );
};
