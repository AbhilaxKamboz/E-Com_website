import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const DEMO_EMAIL = "demo@gmail.com";
  const DEMO_PASS = "demo@123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === DEMO_EMAIL && password === DEMO_PASS) {
      Swal.fire({
        icon: "success",
        title: "Signed in successfully",
        timer: 1200,
        showConfirmButton: false,
      });

      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);

      setTimeout(() => navigate("/home"), 1200);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid credentials",
        text: "Use demo email & password",
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-12 lg:px-8">

      {/* LOGO + TITLE */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="E-Shop"
          src="/e-com.jpg"
          className="mx-auto h-20 w-auto rounded-lg"
        />

        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Login For Shoping
        </h2>
      </div>

      {/* FORM CARD */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  block w-full rounded-md
                  bg-white/5 px-3 py-1.5
                  text-white
                  outline outline-1 outline-white/10
                  placeholder:text-gray-500
                  focus:outline-2 focus:outline-indigo-500
                "
                placeholder="demo@gmail.com"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-100">
                Password
              </label>
            </div>

            <div className="mt-2">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  block w-full rounded-md
                  bg-white/5 px-3 py-1.5
                  text-white
                  outline outline-1 outline-white/10
                  placeholder:text-gray-500
                  focus:outline-2 focus:outline-indigo-500
                "
                placeholder="demo@123"
              />
            </div>
          </div>

          {/* SUBMIT */}
          <div>
            <button
              type="submit"
              className="
                flex w-full justify-center rounded-md
                bg-indigo-500 px-3 py-1.5
                text-sm font-semibold text-white
                hover:bg-indigo-400
                focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-indigo-500
                transition
              "
            >
               Login
            </button>
          </div>
        </form>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} E-Shop
        </p>
      </div>
    </div>
  );
}
