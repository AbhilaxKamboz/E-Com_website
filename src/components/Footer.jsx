import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-15">
      
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            E-Shop
          </h2>
          <p className="text-sm text-gray-400">
            Your trusted destination for latest electronics,
            accessories and gadgets at best prices.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home" className="hover:text-white">Home</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Returns & Refunds</li>
            <li>Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a className="hover:text-white cursor-pointer"><FaFacebookF /></a>
            <a className="hover:text-white cursor-pointer"><FaInstagram /></a>
            <a className="hover:text-white cursor-pointer"><FaTwitter /></a>
            <a className="hover:text-white cursor-pointer" href="https://www.linkedin.com/in/abhilax-kamboj-570438291/" target="blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700 text-center py-2 text-sm text-gray-400">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>

    </footer>
  );
}
