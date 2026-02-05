import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-12">

      {/* TOP FOOTER */}
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6
          py-10
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
          gap-8
        "
      >
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            E-Shop
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted destination for latest electronics,
            accessories and gadgets at best prices.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/home" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white transition">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4 text-lg">
            <a className="hover:text-white transition cursor-pointer">
              <FaFacebookF />
            </a>
            <a className="hover:text-white transition cursor-pointer">
              <FaInstagram />
            </a>
            <a className="hover:text-white transition cursor-pointer">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/abhilax-kamboj-570438291/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-800 py-3 text-center text-xs sm:text-sm">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
}
