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
import Haffi7 from "../assets/haffi7.png";
import { ArrowUpRight } from "lucide-react"; // Right-up arrow icon
import { LinkedIn, Email, Github } from "@/assets/SocialIcon";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Projects",
      link: "/all-projects",
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <div className="hover:text-white text-black flex items-center justify-center gap-0">
              <Link to="#contact">
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
    <div className="container max-w-7xl mx-auto px-4 sm:px-8 pt-24 flex flex-col md:flex-row items-start md:items-center md:justify-between SyneClass gap-12 pb-4">
      
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
          <p className="text-lg sm:text-[24px] mt-4">AI Engineer | Based in Pakistan</p>
        </div>

        {/* Buttons Section */}
        <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
          <Button className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold rounded-xl sm:w-auto" size={"xl"}>
            Let&apos;s Talk
            <HoverArrow />
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold rounded-xl sm:w-auto border border-black dark:border-white bg-transparent"
            size={"xl"}
          >
            My Work
            <HoverArrow />
          </Button>
        </div>

        {/* Stats + Social Icons */}
        <div className="flex sm:flex-row items-start sm:items-center md:justify-start gap-6 mt-6 w-full">

          {/* Stats */}
          <div className="flex flex-wrap items-start sm:items-center gap-6 text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">1.2k+</h2>
              <p className="text-sm text-gray-600">Hours of Coding Practice</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6 opacity-90 mt-4 sm:mt-0">
            <LinkedIn className="w-6 h-6 sm:w-7 sm:h-7 hover:text-blue-600 transition" />
            <Github className="w-6 h-6 sm:w-7 sm:h-7 hover:text-blue-600 transition" />
            <Email className="w-6 h-6 sm:w-7 sm:h-7 hover:text-red-600 transition" />
          </div>

        </div>
      </div>

      {/* Your Image */}
      <img src={Haffi7} alt="Mohid" className=" w-[40%] hidden md:block" />
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div> */}
    </div>
  );
};

