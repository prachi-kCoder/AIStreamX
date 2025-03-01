"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../public/assets"; // Adjust this path to your actual assets folder
import Button from "../components/Button";
import MenuSvg from "../public/assets/svg/MenuSvg";
import { HamburgerMenu } from "../public/design/Header";

const Header = () => {
  const router = useRouter(); // Gets the router object
  const { pathname } = router; // Gets the current path
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll(); // Uncomment if using scroll-lock
    }
  };

  const handleClick = () => {
    if (openNavigation) {
      // enablePageScroll(); // Uncomment if using scroll-lock
      setOpenNavigation(false);
    }
  };

  // Define custom navigation routes
  const navigation = [
    { id: 1, title: "Home", url: "/dashboard" },
    { id: 2, title: "Updates", url: "/latest-updates" },
    { id: 3, title: "Advance", url: "/pricing" },
    { id: 4, title: "Learn", url: "/learn" },
  ];
  const { asPath } = useRouter();
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <Link href="/" className="block w-[15rem] xl:mr-8 flex items-center space-x-2">
          <img src="/assets/brainwave-symbol.svg" width={50} height={20} alt="AiStreamX Logo" />
          <span className="font-bold text-xl text-white">NEXUS AI</span>
        </Link>

        {/* Navigation Menu */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-4 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        <HamburgerMenu />
        </nav>

        {/* Signup Button */}
        <Link
          href="/signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </Link>

        {/* Sign-in Button */}
        <Button className="hidden lg:flex" href="/login">
          Sign In
        </Button>

        {/* Mobile Menu Toggle */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
