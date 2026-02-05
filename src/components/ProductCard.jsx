import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return (
    <div
      className="
        group bg-white rounded-2xl p-4
        border shadow-sm
        hover:shadow-2xl hover:-translate-y-2
        transition-all duration-300 ease-out
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
              w-full h-44 object-cover
              group-hover:scale-110
              transition-transform duration-500
            "
          />
        </div>

        {/* CATEGORY */}
        <span
          className="
            inline-block mt-3 text-xs px-3 py-1 rounded-full
            bg-blue-100 text-blue-600
            group-hover:bg-blue-600 group-hover:text-white
            transition
          "
        >
          {product.category}
        </span>

        {/* NAME */}
        <h2
          className="
            mt-2 font-semibold text-lg text-gray-800
            group-hover:text-blue-600
            transition
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
      <p className="mt-1 text-xl font-bold text-gray-900">
        ₹{product.price}
      </p>

      {/* ADD TO CART */}
      <button
        onClick={() => addToCart(product)}
        className="
          mt-4 w-full py-2 rounded-xl
          bg-black text-white
          hover:bg-blue-600
          transition-all duration-300
          active:scale-95
        "
      >
        Add to Cart
      </button>

      {/* GLOW EFFECT */}
      <div
        className="
          absolute inset-0
          bg-blue-500/10
          opacity-0 group-hover:opacity-100
          transition pointer-events-none
        "
      />
    </div>
  );
}
