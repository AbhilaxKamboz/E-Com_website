import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">

      {/* ================= HERO ================= */}
      <section className="
        bg-gradient-to-r from-black via-gray-900 to-black
        text-white
        py-20 sm:py-28
      ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

          <h1 className="
            text-4xl sm:text-5xl md:text-6xl
            font-extrabold mb-6
          ">
            Welcome to <span className="text-blue-400">E-Shop</span>
          </h1>

          <p className="
            text-gray-300 max-w-2xl mx-auto
            mb-8 text-base sm:text-lg
          ">
            Discover the latest mobiles, laptops & accessories at unbeatable prices.
          </p>

          {/* CTA BUTTONS */}
          <div className="
            flex flex-col sm:flex-row
            justify-center gap-4
          ">
            <Link
              to="/products"
              className="
                w-full sm:w-auto
                bg-blue-500 hover:bg-blue-600
                px-8 py-3 rounded-lg font-semibold
                transition
              "
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="
                w-full sm:w-auto
                border border-white px-8 py-3 rounded-lg
                hover:bg-white hover:text-black
                transition
              "
            >
              Explore Deals
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="overflow-hidden bg-white py-4 shadow">
        <div className="
          whitespace-nowrap
          text-gray-700 font-semibold
          animate-marquee
        ">
          🚀 Big Sale on iPhones &nbsp; • &nbsp;
          💻 Laptops starting at ₹39,999 &nbsp; • &nbsp;
          🎧 Accessories under ₹999 &nbsp; • &nbsp;
          🔥 Limited Time Offers &nbsp; • &nbsp;
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-8 text-center
        ">

          {/* FEATURE CARD */}
          <div className="
            bg-white p-8 rounded-2xl shadow
            hover:shadow-2xl hover:-translate-y-1
            transition
          ">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2">
              Free Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Free shipping on all orders across India
            </p>
          </div>

          <div className="
            bg-white p-8 rounded-2xl shadow
            hover:shadow-2xl hover:-translate-y-1
            transition
          ">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-600 text-sm">
              100% secure transactions with trusted gateways
            </p>
          </div>

          <div className="
            bg-white p-8 rounded-2xl shadow
            hover:shadow-2xl hover:-translate-y-1
            transition
          ">
            <div className="text-5xl mb-4">↩️</div>
            <h3 className="text-xl font-bold mb-2">
              Easy Returns
            </h3>
            <p className="text-gray-600 text-sm">
              Hassle-free 7-day replacement policy
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-50 py-16">
        <div className="text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to upgrade your gadgets?
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Browse our latest collection now
          </p>

          <Link
            to="/products"
            className="
              inline-block bg-black text-white
              px-10 py-3 rounded-lg
              hover:bg-gray-800 transition
            "
          >
            Start Shopping
          </Link>
        </div>
      </section>

    </div>
  );
}
