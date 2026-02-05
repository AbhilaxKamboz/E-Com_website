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

  // TOTAL AMOUNT
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // PLACE ORDER
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

  // CONFIRM CLEAR CART
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
    <div className="p-6 md:p-10 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <p className="text-xl mb-4">🛒 Your cart is empty</p>
          <Link
            to="/products"
            className="text-blue-600 underline"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT: CART ITEMS */}
          <div className="md:col-span-2 space-y-6">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex gap-6 border rounded-xl p-4 shadow-sm bg-white"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    ₹{item.price} each
                  </p>

                  {/* QTY CONTROLS */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* PRICE + REMOVE */}
                <div className="text-right">
                  <p className="font-bold">
                    ₹{item.price * item.qty}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
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

          {/* RIGHT: ORDER SUMMARY */}
          <div className="border rounded-xl p-6 shadow bg-white h-fit sticky top-20">
            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span className="text-green-600">Free</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>

            <button
              onClick={placeOrder}
              className="w-full bg-black text-white py-3 rounded-lg
                         hover:bg-gray-800 transition"
            >
              Place Order
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
