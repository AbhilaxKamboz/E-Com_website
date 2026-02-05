import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const {addToCart}=useCart();

  // Product find from URL
  const product = products.find(p => p.id === Number(id));

  // Quantity state
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600">
        Product not found
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">

      {/* BACK LINK */}
      <Link to="/products" className="text-blue-600 mb-6 inline-block">
        ← Back to Products
      </Link>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT: IMAGE */}
        <div className="border rounded-lg p-4 bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div>

          {/* CATEGORY */}
          <span className="text-sm text-blue-600 uppercase">
            {product.category}
          </span>

          {/* NAME */}
          <h1 className="text-3xl font-bold mt-2">
            {product.name}
          </h1>

          {/* RATING */}
          <p className="text-yellow-500 mt-2">
            {/* ★★★★☆ (4.2/5) */}
            {product.rating}
          </p>

          {/* PRICE */}
          <p className="text-3xl font-bold text-green-600 mt-4">
            ₹{product.price}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            {/* This is a high-quality {product.name} designed for excellent
            performance and long-term reliability. Perfect for everyday use. */}
            {product.description}
          </p>

          {/* QUANTITY */}
          <div className="mt-6 flex items-center gap-3">
            <label className="font-medium">Quantity:</label>
            <select
              value={qty}
              onChange={e => setQty(Number(e.target.value))}
              className="border p-2 rounded"
            >
              {[1,2,3,4,5].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart({ ...product, qty })}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg
                       hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

          {/* DELIVERY INFO */}
          <div className="mt-6 text-sm text-gray-500">
            ✔ Free Delivery <br />
            ✔ 7 Days Replacement <br />
            ✔ Secure Payment
          </div>

        </div>
      </div>
    </div>
  );
}
