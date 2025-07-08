import Link from 'next/link'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa'

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
              Premium real estate developer in Dhaka offering carefully selected lands and plots in prime locations.
            </p>
            <div className="flex space-x-5">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-110"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About Us' },
                { href: '/team', label: 'Our Team' },
                { href: '/contact', label: 'Contact' },
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
                { href: '/projects/nawabganj', label: 'Nawabganj Project' },
                { href: '/projects/borakoir', label: 'Borakoir Project' },
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
                  1st floor, house-25, Road-47, Gulshan-2, Dhaka-1212
                </address>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-yellow-400 h-6 w-6" />
                <a
                  href="tel:01337938314"
                  className="hover:text-yellow-400 transition-colors tracking-wide"
                >
                  01337-938314
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-400 h-6 w-6" />
                <a
                  href="mailto:mdnayanmalik@gmail.com"
                  className="hover:text-yellow-400 transition-colors tracking-wide"
                >
                  mdnayanmalik@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm tracking-wide select-text">
          <p>&copy; {new Date().getFullYear()} Banglar Choya Model City Ltd. All rights reserved.</p>
          <p>Established: 20th October 2023</p>
        </div>
      </div>
    </footer>
  )
}
