// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// import logo from "/assets/Images/Logo/BDRG LOGO.png";


// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-[#ffffff] backdrop-blur supports-[backdrop-filter]:bg-[#ffffff] border-b">
//       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="">
//           <img src={logo} alt="BDRG Logo" className="h-13" />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden xl:block">
//           <ul className="flex text-lg items-center gap-8 font-medium text-[#006881] hover:text-[#6f1f34]">
//             <li>
//               <Link to="/" className="hover:text-[#006881] transition">Home</Link>
//             </li>

//             {/* Services (1st-level dropdown on hover) */}
//             {/* <li className="relative group/about">
//               <button
//                 type="button"
//                 className="inline-flex items-center gap-1 hover:text-[#006881] transition"
//                 aria-haspopup="menu"
//               >
//                 Services <ChevronDown size={16} aria-hidden />
//               </button> */}

//               {/* Dropdown panel */}
//               {/* <ul
//                 className="absolute left-0 top-full mt-2 w-56 rounded-xl border bg-[#006881] shadow-lg p-2
//                            opacity-0 invisible translate-y-1 transition-all duration-200 ease-out
//                            group-hover/about:opacity-100 group-hover/about:visible group-hover/about:translate-y-0
//                            group-focus-within/about:opacity-100 group-focus-within/about:visible group-focus-within/about:translate-y-0"
//                 role="menu"
//               >
//                 <li>
//                   <Link to="/team" className="block rounded-lg px-3 py-2 hover:bg-[#6f1634]">Team</Link>
//                 </li>
//                 <li>
//                   <Link to="/testimonials" className="block rounded-lg px-3 py-2 hover:bg-[#6f1634]">Testimonials</Link>
//                 </li> */}

//                 {/* Deep (2nd-level dropdown on hover) */}
//                 {/* <li className="relative group/deep">
//                   <Link
//                     to="#"
//                     className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-[#6f1634]"
//                   >
//                     Deep Dropdown <ChevronRight size={16} aria-hidden />
//                   </Link>

//                   <ul
//                     className="absolute left-full top-0 ml-1 w-56 rounded-xl border bg-[#006881] shadow-lg p-2
//                                opacity-0 invisible translate-x-1 transition-all duration-200 ease-out
//                                group-hover/deep:opacity-100 group-hover/deep:visible group-hover/deep:translate-x-0
//                                group-focus-within/deep:opacity-100 group-focus-within/deep:visible group-focus-within/deep:translate-x-0"
//                     role="menu"
//                   >
//                     <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-[#6f1634]">Deep Dropdown 1</Link></li>
//                     <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-[#6f1634]">Deep Dropdown 2</Link></li>
//                     <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-[#6f1634]">Deep Dropdown 3</Link></li>
//                     <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-[#6f1634]">Deep Dropdown 4</Link></li>
//                     <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-[#6f1634]">Deep Dropdown 5</Link></li>
//                   </ul>
//                 </li>
//               </ul>
//             </li> */}

//             <li><Link to="/services" className="hover:text-[#006881] transition">Services</Link></li>
//             <li><Link to="/about" className="hover:text-[#006881] transition">About</Link></li>
//             <li><Link to="/ourprojects" className="hover:text-[#006881] transition">Our Projects</Link></li>
//             <li><Link to="/ourteam" className="hover:text-[#006881] transition">Our Team</Link></li>
//             <li><Link to="/blog" className="hover:text-[#006881] transition">Portfolio</Link></li>
//             <li><Link to="/contact" className="hover:text-[#006881] transition">Contact</Link></li>

//             {/* <li>
//               <Link
//                 to="/about"
//                 className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition"
//               >
//                 Get Started
//               </Link>
//             </li> */}
//           </ul>
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setMobileOpen((v) => !v)}
//           className="xl:hidden p-2 text-[#006881] hover:text-[#6f1f34] transition rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#006881]"
//           aria-label="Toggle menu"
//           aria-expanded={mobileOpen}
//         >
//           {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       <nav
//         className={`xl:hidden overflow-hidden transition-[max-height] duration-300 bg-white border-b ${
//           mobileOpen ? "max-h-[28rem]" : "max-h-0"
//         }`}
//       >
//         <ul className="px-4 py-4 space-y-2 font-medium text-gray-700">
//           <li><Link to="/" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Home</Link></li>

//           <li>
//             <details className="group">
//               <summary className="cursor-pointer list-none rounded-lg px-3 py-2 hover:bg-gray-50 flex items-center justify-between">
//                 <span>About</span>
//                 <ChevronDown size={16} className="group-open:rotate-180 transition" />
//               </summary>
//               <ul className="mt-2 space-y-1 pl-3">
//                 <li><Link to="/team" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Team</Link></li>
//                 <li><Link to="/testimonials" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Testimonials</Link></li>
//                 <li>
//                   <details className="group">
//                     <summary className="cursor-pointer list-none rounded-lg px-3 py-2 hover:bg-gray-50 flex items-center justify-between">
//                       <span>Deep Dropdown</span>
//                       <ChevronDown size={16} className="group-open:rotate-180 transition" />
//                     </summary>
//                     <ul className="mt-2 space-y-1 pl-3">
//                       <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Deep Dropdown 1</Link></li>
//                       <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Deep Dropdown 2</Link></li>
//                       <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Deep Dropdown 3</Link></li>
//                       <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Deep Dropdown 4</Link></li>
//                       <li><Link to="#" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Deep Dropdown 5</Link></li>
//                     </ul>
//                   </details>
//                 </li>
//               </ul>
//             </details>
//           </li>

//           <li><Link to="/services" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Services</Link></li>
//           <li><Link to="/portfolio" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Portfolio</Link></li>
//           <li><Link to="/pricing" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Pricing</Link></li>
//           <li><Link to="/blog" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Blog</Link></li>
//           <li><Link to="/contact" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Contact</Link></li>
//           <li>
//             <Link to="/about" className="block text-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition">Get Started</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }




import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "/assets/Images/Logo/BDRG LOGO.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Our Projects", path: "/ourprojects" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Portfolio", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff] backdrop-blur supports-[backdrop-filter]:bg-[#ffffff] border-b">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="">
          <img src={logo} alt="BDRG Logo" className="h-13" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:block">
          <ul className="flex text-lg items-center gap-8 font-medium text-[#006881] hover:text-[#6f1f34]">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link to={item.path} className="hover:text-[#006881] transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="xl:hidden p-2 text-[#006881] hover:text-[#6f1f34] transition rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#006881]"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`xl:hidden overflow-hidden transition-[max-height] duration-300 bg-white border-b ${
          mobileOpen ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <ul className="px-4 py-4 space-y-2 font-medium text-gray-700">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className="block rounded-lg px-3 py-2 hover:bg-gray-50"
                onClick={() => setMobileOpen(false)} // close menu after click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
