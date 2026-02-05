import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-600 text-lg">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

      {/* BACK LINK */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline mb-6"
      >
        ← Back to Products
      </Link>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

        {/* IMAGE SECTION */}
        <div className="
          bg-white border rounded-2xl
          p-4 sm:p-6
          flex items-center justify-center
          shadow-sm
        ">
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full max-h-[420px]
              object-contain
              hover:scale-105
              transition duration-300
            "
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col">

          {/* CATEGORY */}
          <span className="
            text-xs uppercase tracking-wider
            text-blue-600 font-semibold
          ">
            {product.category}
          </span>

          {/* NAME */}
          <h1 className="
            mt-2 text-2xl sm:text-3xl
            font-bold text-gray-900
          ">
            {product.name}
          </h1>

          {/* RATING */}
          <p className="mt-2 text-yellow-500 text-sm">
            ⭐ {product.rating} / 5
          </p>

          {/* PRICE */}
          <p className="
            mt-4 text-3xl font-extrabold
            text-green-600
          ">
            ₹{product.price}
          </p>

          {/* DESCRIPTION */}
          <p className="
            mt-4 text-gray-600
            text-sm sm:text-base
            leading-relaxed
          ">
            {product.description}
          </p>

          {/* QUANTITY */}
          <div className="mt-6 flex items-center gap-4">
            <span className="font-medium text-sm">
              Quantity
            </span>
            <select
              value={qty}
              onChange={e => setQty(Number(e.target.value))}
              className="
                border rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-black
              "
            >
              {[1,2,3,4,5].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <button
              onClick={() => addToCart({ ...product, qty })}
              className="
                w-full sm:w-auto
                px-8 py-3
                bg-black text-white
                rounded-xl font-semibold
                hover:bg-gray-800
                active:scale-95
                transition
              "
            >
              Add to Cart
            </button>

            <Link
              to="/cart"
              className="
                w-full sm:w-auto
                text-center
                px-8 py-3
                border border-black
                rounded-xl font-semibold
                hover:bg-black hover:text-white
                transition
              "
            >
              Go to Cart
            </Link>

          </div>

          {/* DELIVERY INFO */}
          <div className="
            mt-8 text-sm text-gray-500
            space-y-1
          ">
            <p>✔ Free Delivery</p>
            <p>✔ 7 Days Replacement</p>
            <p>✔ Secure Payment</p>
          </div>

        </div>
      </div>
    </div>
  );
}
