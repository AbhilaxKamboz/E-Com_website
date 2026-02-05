import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("isLoggedIn");
    if (auth === "true") setIsLoggedIn(true);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <CartProvider>
      <BrowserRouter>

        {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}

        <Routes>
          <Route path="/" element={
            isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
          } />

          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/home" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          } />

          <Route path="/products" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Products />
            </ProtectedRoute>
          } />

          <Route path="/cart" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Cart />
            </ProtectedRoute>
          } />

          <Route path="/products/:id" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ProductDetail />
            </ProtectedRoute>
          } />
        </Routes>

       {isLoggedIn && <Footer setIsLoggedIn={setIsLoggedIn} />}

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
