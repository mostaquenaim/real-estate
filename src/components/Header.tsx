"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { Phone, MapPin, Menu, X, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { slideIn } from "./animations";
import { Button } from "./ui/button";
import Marquee from "react-fast-marquee";

export default function Header() {
  const controls = useAnimation();
  const ref = useRef(null);
  const pathname = usePathname();
  console.log("pathname", pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    // { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-green-800 flex flex-col items-center justify-center">
      {/* Top Info Bar */}
      {/* For medium and above (marquee active) */}
      <div className="hidden md:block">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="bg-green-800 text-white w-full py-2"
        >
          <div className="flex gap-10 items-center text-xs md:text-sm font-medium px-2 md:px-0">
            <a href="tel:01337938322" className="flex items-center gap-2 mr-10">
              <Phone className="w-4 h-4 text-white md:text-green-600" />
              <span className="hidden md:inline">+88 01337938322</span>
            </a>
            <a
              href="mailto:banglarchoyamodelcity@gmail.com"
              className="flex items-center gap-2 mr-10"
            >
              <Mail className="w-4 h-4 text-white md:text-green-600" />
              <span className="hidden md:inline">
                banglarchoyamodelcity@gmail.com
              </span>
            </a>
            <a
              href="https://maps.app.goo.gl/aWFSKQykjrCaS6t88"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mr-10"
            >
              <MapPin className="w-4 h-4 text-white md:text-green-600" />
              <span>Gulshan-2, Dhaka</span>
            </a>
          </div>
        </Marquee>
      </div>

      {/* For small devices (static content) */}
      <div className="block md:hidden bg-green-800 text-white w-full py-2">
        <div className="flex gap-2 items-start px-4 text-xs font-medium justify-end">
          <a href="tel:01337938322" className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white" />
          </a>
          <a
            href="mailto:banglarchoyamodelcity@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-white" />
          </a>
          <a
            href="https://maps.app.goo.gl/aWFSKQykjrCaS6t88"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-white" />
            <span>Gulshan-2, Dhaka</span>
          </a>
        </div>
      </div>

      <header className="p-5 md:p-0 absolute top-10 z-50  md:backdrop-blur md:shadow-lg md:shadow-green-200 md:border-b-2 border-green-200 w-full md:w-5/6 lg:w-3/4 rounded-lg">
        {/* Main Navbar */}
        <div className="flex justify-between md:justify-around items-center">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideIn()}
            className="flex items-center"
          >
            <Link href="/" className="">
              <img
                src={"/rsz_banglar-choya-logo.png"}
                className="w-20 md:w-32"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-around gap-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                className="flex flex-col items-center"
                whileHover="hover"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                  hover: { transition: { staggerChildren: 0.1 } },
                }}
              >
                <Link href={link.path} passHref>
                  <motion.button
                    className={`cursor-pointer relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300
          ${
            pathname === link.path || pathname === link.path + "/"
              ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-700"
          }`}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.button>
                </Link>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, width: 0 },
                    show: { opacity: 0, width: 0 },
                    hover: {
                      opacity: 1,
                      width: "3rem",
                      transition: { duration: 0.3 },
                    },
                  }}
                  className="h-1 rounded-full mt-1 bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-500 shadow-md"
                />
              </motion.div>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="cursor-pointer bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-md shadow hover:scale-105 hover:shadow-lg transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-green-700 focus:outline-none"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="backdrop-blur-lg md:hidden space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block text-center px-4 py-2 rounded-md text-sm font-medium transition 
                  ${
                    pathname === link.path || pathname === link.path + "/"
                      ? "bg-green-100 text-green-700"
                      : "text-gray-800 hover:bg-green-50 hover:text-green-600"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="px-4">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-md py-2 shadow hover:scale-105 transition duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
