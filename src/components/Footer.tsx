import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import SocialPlatforms from "./SocialPlatforms";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 select-none">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Social */}
          <div>
            <h3 className="text-2xl font-extrabold mb-5 text-yellow-400 tracking-wide">
              Banglar Choya
            </h3>
            <p className="mb-6 text-gray-400 leading-relaxed">
              Premium real estate developer in Dhaka offering carefully selected
              lands and plots in prime locations.
            </p>
            <SocialPlatforms classes="flex gap-5" textSize="2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/home", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About Us" },
                { href: "/team", label: "Our Team" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide uppercase">
              Our Projects
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/projects/nawabganj", label: "Nawabganj Project" },
                { href: "/projects/borakoir", label: "Borakoir Project" },
                { href: "/projects/kolatia", label: "Kolatia Project" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide uppercase">
              Contact Us
            </h4>
            <div className="space-y-6 text-gray-400">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-yellow-400 flex-shrink-0 h-6 w-6" />
                <address className="not-italic">
                  <a
                    href="https://maps.app.goo.gl/aWFSKQykjrCaS6t88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    1st floor, house-25, Road-47, Gulshan-2, Dhaka-1212
                  </a>
                </address>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-yellow-400 h-6 w-6" />
                <a
                  href="tel:01337938322"
                  className="hover:text-yellow-400 transition-colors tracking-wide"
                >
                  +88 01337938322
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-400 h-6 w-6" />
                <a
                  href="mailto:banglarchoyamodelcity@gmail.com"
                  className="hover:text-yellow-400 transition-colors tracking-wide"
                >
                  banglarchoyamodelcity@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm tracking-wide select-text">
          <p>
            &copy; {new Date().getFullYear()} Banglar Choya Model City Ltd. All
            rights reserved.
          </p>
          <p>Established: 20th October 2023</p>
        </div>
      </div>
    </footer>
  );
}
