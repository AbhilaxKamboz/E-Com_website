import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillProduct, AiOutlineLogout } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "../context/CartContext";

export default function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();

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

  // Active link style
  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-400 border-b-2 border-blue-400"
      : "text-gray-300 hover:text-white";

  return (
    <nav className="
      sticky top-0 z-50
      bg-gradient-to-r from-black via-gray-900 to-black
      shadow-lg
    ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/home" className="text-2xl font-extrabold tracking-wide text-white">
          E<span className="text-blue-400">-Shop</span>
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-8 items-center text-sm font-medium">

          <Link to="/home" className={`flex items-center gap-1 pb-1 ${isActive("/home")}`}>
            <IoHomeOutline size={18} />
            Home
          </Link>

          <Link to="/products" className={`flex items-center gap-1 pb-1 ${isActive("/products")}`}>
            <AiFillProduct size={18} />
            Products
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className={`relative flex items-center gap-1 pb-1 ${isActive("/cart")}`}
          >
            <GiShoppingCart size={20} />

            {/* CART BADGE */}
            {cartCount > 0 && (
              <span className="
                absolute -top-2 -right-3
                bg-red-600 text-white
                text-xs font-bold
                w-5 h-5
                flex items-center justify-center
                rounded-full
                animate-pulse
              ">
                {cartCount}
              </span>
            )}

            Cart
          </Link>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="
              flex items-center gap-1
              text-gray-300
              hover:text-red-400
              transition
            "
          >
            <AiOutlineLogout size={18} />
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}
