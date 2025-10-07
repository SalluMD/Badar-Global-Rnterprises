import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "/assets/Images/Logo/BDRG LOGO.png";

// Animation variants
const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.95 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      // dropdown: [
      //   { name: "Our Team", path: "/ourteam" },
      //   { name: "Testimonials", path: "/testimonials" },
      //   { name: "Our Story", path: "/story" },
      // ],
    },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/ourprojects" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Team", path: "/ourteam" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src={logo}
            alt="Badar Global Enterprise Logo"
            className="h-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-base font-medium text-[#006881]">
            {navItems.map((item, i) => (
              <li key={i} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(i)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button
                      className="flex items-center gap-1 hover:text-[#6f1f34] transition"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen === i}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          dropdownOpen === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen === i && (
                        <motion.ul
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-[#006881] text-white shadow-lg p-2 z-10"
                          role="menu"
                        >
                          {item.dropdown.map((subItem, j) => (
                            <li key={j}>
                              <Link
                                to={subItem.path}
                                className="block rounded-lg px-3 py-2 hover:bg-[#6f1f34] transition"
                                onClick={() => setDropdownOpen(null)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-[#6f1f34] transition"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-[#006881] px-4 py-2 text-white font-semibold hover:bg-[#6f1f34] transition shadow-md"
            >
              Get Started
            </Link> */}
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 text-[#006881] hover:text-[#6f1f34] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006881]"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-2 font-medium text-gray-700">
              {navItems.map((item, i) => (
                <li key={i}>
                  {item.dropdown ? (
                    <details className="group">
                      <summary className="cursor-pointer list-none rounded-lg px-3 py-2 hover:bg-gray-50 flex items-center justify-between">
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          className="group-open:rotate-180 transition"
                        />
                      </summary>
                      <ul className="mt-2 space-y-1 pl-4">
                        {item.dropdown.map((subItem, j) => (
                          <li key={j}>
                            <Link
                              to={subItem.path}
                              className="block rounded-lg px-3 py-2 hover:bg-gray-50"
                              onClick={() => setMobileOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={item.path}
                      className="block rounded-lg px-3 py-2 hover:bg-gray-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                {/* <Link
                  to="/contact"
                  className="block text-center rounded-full bg-[#006881] px-4 py-2 text-white font-semibold hover:bg-[#6f1f34] transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link> */}
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}