import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLandmark,
  FaChevronRight,
} from "react-icons/fa";
import SocialPlatforms from "./SocialPlatforms";
import { bankInfo } from "./BankDetails";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 select-none border-t-8 border-yellow-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-5">
              <FaLandmark className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-white tracking-wide">
                Banglar Choya{" "}
                <span className="text-yellow-500">Model City</span>
              </h3>
            </div>
            <p className="mb-6 text-gray-400 leading-relaxed text-justify">
              As a premier real estate developer in Dhaka, we specialize in
              carefully selected lands and plots in prime locations. Our mission
              is to build sustainable communities with modern amenities and
              excellent investment potential.
            </p>
            <div className="mb-6">
              <h5 className="text-white font-medium mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-4 py-2 rounded-r transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <SocialPlatforms classes="flex gap-5" textSize="2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white pb-2 border-b border-gray-700 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/home", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About Us" },
                // { href: "/gallery", label: "Gallery" },
                // { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href} className="flex items-center">
                  <FaChevronRight className="text-yellow-500 text-xs mr-2" />
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Bank Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white pb-2 border-b border-gray-700 tracking-wide">
              Contact & Banking
            </h4>
            <div className="space-y-4">
              {/* Contact Info */}
              <div>
                <h5 className="text-white font-medium mb-3">Contact Info</h5>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-yellow-500 flex-shrink-0" />
                    <address className="not-italic">
                      <a
                        href="https://maps.app.goo.gl/aWFSKQykjrCaS6t88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 transition-colors"
                      >
                        1st floor, house-25, Road-47, Gulshan-2, Dhaka-1212
                      </a>
                    </address>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-yellow-500" />
                    <a
                      href="tel:01337938322"
                      className="hover:text-yellow-500 transition-colors"
                    >
                      +88 01337938322
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-yellow-500" />
                    <a
                      href="mailto:banglarchoyamodelcity@gmail.com"
                      className="hover:text-yellow-500 transition-colors"
                    >
                      banglarchoyamodelcity@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Bank Info */}
              <div>
                <h5 className="text-white font-medium mb-3">Bank Details</h5>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>
                    <span className="font-medium">Account Name:</span> Banglar
                    Choya Model City Ltd.
                  </p>
                  <p>
                    <span className="font-medium">Account No:</span>{" "}
                    1922210011805
                  </p>
                  <p>
                    <span className="font-medium">Bank Name:</span> NRB Bank
                  </p>
                  <p>
                    <span className="font-medium">Branch:</span> Gulshan Branch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold mb-6 text-white pb-2 border-b border-gray-700 tracking-wide">
            Our Projects
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/projects/nawabganj",
                label: "Nawabganj Projects",
                location: "Nawabganj, Dhaka",
              },
              {
                href: "/projects/borakoir",
                label: "Dhamrai Projects",
                location: "Dhamrai, Dhaka",
              },
              // {
              //   href: "/projects/kolatia",
              //   label: "Kolatia Projects",
              //   location: "Kolatia, Dhaka",
              // },
              // {
              //   href: "/projects/upcoming",
              //   label: "Upcoming Projects",
              //   location: "Coming Soon",
              // },
            ].map(({ href, label, location }) => (
              <Link
                key={href}
                href={href}
                className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <h5 className="font-medium text-white group-hover:text-yellow-500 transition-colors">
                  {label}
                </h5>
                <p className="text-sm text-gray-400 mt-1">{location}</p>
                <div className="mt-2 text-yellow-500 text-xs font-medium flex items-center">
                  View Details{" "}
                  <FaChevronRight className="ml-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {currentYear} Banglar Choya Model City Ltd. All rights
              reserved.
            </p>
            <p className="text-xs mt-1">
              Registered under REHAB (Registration No: 12345)
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p>Established: 20th October 2023</p>
            <div className="flex gap-4 mt-2">
              <Link
                href="/privacy-policy"
                className="hover:text-yellow-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-yellow-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
