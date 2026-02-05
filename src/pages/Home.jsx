import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">

      {/* HERO SECTION */}
      <section className="
        bg-gradient-to-r from-black via-gray-900 to-black
        text-white
        py-24
      ">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to <span className="text-blue-400">E-Shop</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            Discover the latest mobiles, laptops & accessories at unbeatable prices.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/products"
              className="
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

      {/* MOVING TEXT (MARQUEE EFFECT) */}
      <div className="overflow-hidden bg-white py-4 shadow">
        <div className="animate-marquee whitespace-nowrap text-gray-700 font-semibold">
          🚀 Big Sale on iPhones &nbsp; • &nbsp;
          💻 Laptops starting at ₹39,999 &nbsp; • &nbsp;
          🎧 Accessories under ₹999 &nbsp; • &nbsp;
          🔥 Limited Time Offers &nbsp; • &nbsp;
        </div>
      </div>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div className="
            bg-white p-8 rounded-xl shadow
            hover:shadow-xl transition
          ">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-600">
              Free shipping on all orders across India
            </p>
          </div>

          <div className="
            bg-white p-8 rounded-xl shadow
            hover:shadow-xl transition
          ">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              100% secure transactions with trusted gateways
            </p>
          </div>

          <div className="
            bg-white p-8 rounded-xl shadow
            hover:shadow-xl transition
          ">
            <div className="text-4xl mb-4">↩️</div>
            <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
            <p className="text-gray-600">
              Hassle-free 7-day replacement policy
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-50 py-16">
        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to upgrade your gadgets?
          </h2>
          <p className="text-gray-600 mb-6">
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
