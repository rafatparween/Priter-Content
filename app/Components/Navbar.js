// "use client";
// import React, { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="z-50" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(212, 167, 213, 0.4) 17%, rgb(207, 81, 165) 82%)' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-[120px]">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link legacyBehavior href="/" className="text-[39px] text-[#0C71C3] font-sans 2xl:ml-[-225px]">
//               <a className="text-black hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center">IjStart Printer</a>
//             </Link>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden lg:flex lg:items-center lg:space-x-8">
//             <Link legacyBehavior href="/">
//               <a className="text-black hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center">
//                 Home
//               </a>
//             </Link>
//             <Link legacyBehavior href="/about">
//               <a className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center">
//                 About
//               </a>
//             </Link>
//             <ScrollLink
//               to="serviceSection"
//               smooth={true}
//               duration={500}
//               offset={-70}
//               className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center cursor-pointer"
//             >
//               Service
//             </ScrollLink>
//             <Link legacyBehavior href="/blog">
//               <a className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center">
//                 Blog
//               </a>
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="flex items-center lg:hidden">
//             <button
//               type="button"
//               className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-500"
//               aria-controls="mobile-menu"
//               aria-expanded={isMobileMenuOpen}
//               onClick={toggleMobileMenu}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//               <svg
//                 className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Links */}
//       <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`} id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link legacyBehavior href="/">
//             <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
//               Home
//             </a>
//           </Link>
//           <Link legacyBehavior href="/about">
//             <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
//               About
//             </a>
//           </Link>
//           <ScrollLink
//             to="serviceSection"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue cursor-pointer"
//           >
//             Service
//           </ScrollLink>
//           <Link legacyBehavior href="/blog">
//             <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
//               Blog
//             </a>
//           </Link>
//           <Link legacyBehavior href="/cart">
//             <a className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
//               Cart
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
//                 {/* Dynamic Cart Count */}
//               </span>
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;\\



"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="z-50" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(212, 167, 213, 0.4) 17%, rgb(207, 81, 165) 82%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[120px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link legacyBehavior href="/" className="text-[39px] text-[#0C71C3] font-sans 2xl:ml-[-225px]">
              <a className="text-black hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center">IjStart Printer</a>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link legacyBehavior href="/">
              <a className="text-black hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center">
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/about">
              <a className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center">
                About
              </a>
            </Link>
            <Link legacyBehavior href="/service">
              <a className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center">
                Services
              </a>
            </Link>
            <Link legacyBehavior href="/blogs">
              <a className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center">
                Blog
              </a>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link legacyBehavior href="/">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
              Home
            </a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
              About
            </a>
          </Link>
          <Link legacyBehavior href="/blog">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
              Blog
            </a>
          </Link>
          <Link legacyBehavior href="/cart">
            <a className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
              Cart
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {/* Dynamic Cart Count */}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
