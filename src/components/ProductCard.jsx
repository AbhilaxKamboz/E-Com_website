import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return (
    <div
      className="
        group bg-white rounded-2xl p-4
        border shadow-sm
        transition-all duration-300 ease-out
        hover:shadow-2xl hover:-translate-y-2
        relative overflow-hidden
      "
    >
      {/* IMAGE */}
      <Link to={`/products/${product.id}`}>
        <div className="overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full
              h-36 sm:h-40 md:h-44
              object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </div>

        {/* CATEGORY */}
        <span
          className="
            inline-block mt-3 text-xs
            px-3 py-1 rounded-full
            bg-blue-100 text-blue-600
            transition
            group-hover:bg-blue-600 group-hover:text-white
          "
        >
          {product.category}
        </span>

        {/* NAME */}
        <h2
          className="
            mt-2 font-semibold
            text-base sm:text-lg
            text-gray-800
            transition
            group-hover:text-blue-600
            line-clamp-2
          "
        >
          {product.name}
        </h2>

        {/* RATING */}
        <p className="text-yellow-500 text-sm">
          ⭐ {product.rating}
        </p>
      </Link>

      {/* PRICE */}
      <p className="mt-1 text-lg sm:text-xl font-bold text-gray-900">
        ₹{product.price}
      </p>

      {/* ADD TO CART */}
      <button
        onClick={() => addToCart(product)}
        className="
          mt-4 w-full py-2 rounded-xl
          bg-black text-white text-sm sm:text-base
          hover:bg-blue-600
          transition-all duration-300
          active:scale-95
        "
      >
        Add to Cart
      </button>

      {/* HOVER GLOW (DESKTOP FEEL) */}
      <div
        className="
          absolute inset-0
          bg-blue-500/10
          opacity-0
          group-hover:opacity-100
          transition
          pointer-events-none
        "
      />
    </div>
  );
}
