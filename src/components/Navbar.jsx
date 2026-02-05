import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { IoHomeOutline, IoMenu, IoClose } from "react-icons/io5";
import { AiFillProduct, AiOutlineLogout } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "../context/CartContext";

export default function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      icon: "success",
      title: "Logged out",
      timer: 1200,
      showConfirmButton: false,
    });

    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);

    setTimeout(() => navigate("/login"), 1200);
  };

  // Active link
  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-400"
      : "text-gray-300 hover:text-white";

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/home" className="text-2xl font-extrabold text-white">
          E<span className="text-blue-400">-Shop</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link to="/home" className={`flex items-center gap-1 ${isActive("/home")}`}>
            <IoHomeOutline /> Home
          </Link>

          <Link to="/products" className={`flex items-center gap-1 ${isActive("/products")}`}>
            <AiFillProduct /> Products
          </Link>

          <Link to="/cart" className={`relative flex items-center gap-1 ${isActive("/cart")}`}>
            <GiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
            Cart
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-gray-300 hover:text-red-400"
          >
            <AiOutlineLogout /> Logout
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-4">

          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 ${isActive("/home")}`}
          >
            <IoHomeOutline /> Home
          </Link>

          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 ${isActive("/products")}`}
          >
            <AiFillProduct /> Products
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 ${isActive("/cart")}`}
          >
            <GiShoppingCart />
            Cart
            {cartCount > 0 && (
              <span className="ml-auto bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-400"
          >
            <AiOutlineLogout /> Logout
          </button>
        </div>
      )}
    </nav>
  );
}
