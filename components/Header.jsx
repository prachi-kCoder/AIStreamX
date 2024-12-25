// "use client";

// import { useRouter } from "next/router";
// import Link from "next/link";
// import { useState } from "react";
// // import { disablePageScroll, enablePageScroll } from "scroll-lock";
// import { brainwave } from "../public/assets"; // Adjust this path to your actual assets folder
// import Button from "../components/Button";
// import MenuSvg from "../public/assets/svg/MenuSvg";
// import { HamburgerMenu } from "../public/design/Header";

// const Header = () => {
//   const router = useRouter(); // Gets the router object
//   const { pathname } = router; // Gets the current path
//   const [openNavigation, setOpenNavigation] = useState(false);

//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//       // enablePageScroll(); // Uncomment if using scroll-lock
//     } else {
//       setOpenNavigation(true);
//       // disablePageScroll(); // Uncomment if using scroll-lock
//     }
//   };

//   const handleClick = () => {
//     if (openNavigation) {
//       // enablePageScroll(); // Uncomment if using scroll-lock
//       setOpenNavigation(false);
//     }
//   };

//   // Define custom navigation routes
//   const navigation = [
//     { id: 1, title: "Home", url: "/" },
//     { id: 2, title: "Updates", url: "/updates" },
//     { id: 3, title: "About", url: "/about" },
//     { id: 4, title: "Contact", url: "/contact" },
//   ];

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 border-b border-gray-200 lg:bg-white/90 lg:backdrop-blur-sm ${
//         openNavigation ? "bg-white" : "bg-white/90 backdrop-blur-sm"
//       }`}
//     >
//       <div className="flex items-center px-5 lg:px-10 max-lg:py-4">
//         {/* Logo */}
//         <Link href="/" className="block w-[12rem] xl:mr-8">
//           <img src={brainwave} width={190} height={40} alt="Brainwave Logo" />
//         </Link>

//         {/* Navigation Menu */}
//         <nav
//           className={`${
//             openNavigation ? "flex" : "hidden"
//           } fixed top-[5rem] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
//         >
//           <div className="relative z-10 flex flex-col items-center justify-center m-auto lg:flex-row">
//             {navigation.map((item) => (
//               <Link
//                 key={item.id}
//                 href={item.url}
//                 onClick={handleClick}
//                 className={`block font-medium text-lg uppercase text-gray-700 transition hover:text-purple-600 ${
//                   item.url === pathname ? "text-purple-600" : ""
//                 } px-6 py-4 lg:px-4 lg:py-2`}
//               >
//                 {item.title}
//               </Link>
//             ))}
//           </div>
//           <HamburgerMenu />
//         </nav>

//         {/* Signup Button */}
//         <Link
//           href="/signup"
//           className="hidden mr-8 text-gray-700 transition-colors hover:text-purple-600 lg:block"
//         >
//           New Account
//         </Link>

//         {/* Sign-in Button */}
//         <Button className="hidden lg:flex" href="/login">
//           Sign In
//         </Button>

//         {/* Mobile Menu Toggle */}
//         <Button
//           className="ml-auto lg:hidden"
//           px="px-3"
//           onClick={toggleNavigation}
//         >
//           <MenuSvg openNavigation={openNavigation} />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Header;
"use client";

import { usePathname, useRouter } from "next/navigation"; // New hooks from next/navigation
import Link from "next/link";
import { useState } from "react";
import Button from "../components/Button";

const Header = () => {
  const pathname = usePathname(); // Replaces router.pathname
  const router = useRouter(); // Only needed if you programmatically navigate
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  const navigation = [
    { id: 1, title: "Home", url: "/dashboard" },
    { id: 2, title: "Updates", url: "/updates" },
    { id: 3, title: "About", url: "/about" },
    { id: 4, title: "Contact", url: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-200 lg:bg-/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-white" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-10 max-lg:py-4">
        {/* Logo */}
        <Link href="/" className="block w-[12rem] xl:mr-8">
          <img src="../public/assets/brainwave.svg" width={190} height={40} alt="Brainwave Logo" />
        </Link>

        {/* Navigation Menu */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-10 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block font-medium text-lg uppercase text-gray-700 transition hover:text-purple-600 ${
                  item.url === pathname ? "text-purple-600" : ""
                } px-6 py-4 lg:px-4 lg:py-2`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* Signup Button */}
        <Link
          href="/signup"
          className="hidden mr-8 text-gray-700 transition-colors hover:text-purple-600 lg:block"
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
          <span>{openNavigation ? "Close" : "Menu"}</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;

