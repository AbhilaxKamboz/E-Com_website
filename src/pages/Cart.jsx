import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    removeAll
  } = useCart();

  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    Swal.fire({
      icon: "success",
      title: "Order Placed 🎉",
      text: "Thank you for shopping with us",
      timer: 1500,
      showConfirmButton: false,
    });

    clearCart();
    setTimeout(() => navigate("/home"), 1500);
  };

  const handleClearCart = () => {
    Swal.fire({
      title: "Clear Cart?",
      text: "All items will be removed",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeAll();
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

      <h1 className="text-2xl sm:text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <p className="text-lg sm:text-xl mb-4">🛒 Your cart is empty</p>
          <Link to="/products" className="text-blue-600 underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map(item => (
              <div
                key={item.id}
                className="
                  flex flex-col sm:flex-row gap-4
                  border rounded-2xl p-4
                  bg-white shadow-sm
                "
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full sm:w-24
                    h-32 sm:h-24
                    object-cover rounded-lg
                  "
                />

                {/* DETAILS */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-semibold text-base sm:text-lg">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      ₹{item.price} each
                    </p>
                  </div>

                  {/* QTY */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* PRICE + REMOVE */}
                <div className="text-right flex sm:flex-col justify-between">
                  <p className="font-bold text-lg">
                    ₹{item.price * item.qty}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={handleClearCart}
              className="text-red-600 text-sm hover:underline"
            >
              Remove All Items
            </button>
          </div>

          {/* ORDER SUMMARY */}
          <div className="
            border rounded-2xl p-6
            bg-white shadow
            h-fit lg:sticky lg:top-24
          ">
            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2 text-sm">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-2 text-sm">
              <span>Delivery</span>
              <span className="text-green-600">Free</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>

            <button
              onClick={placeOrder}
              className="
                w-full py-3 rounded-xl
                bg-black text-white font-semibold
                hover:bg-gray-800
                active:scale-95 transition
              "
            >
              Place Order
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
