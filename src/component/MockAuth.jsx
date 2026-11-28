
import { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "./Button";

function MockAuth() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("mockUser")) || null;
  });

  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    const mockUser = {
      name: email.split("@")[0],
      email: email,
    };

    localStorage.setItem("mockUser", JSON.stringify(mockUser));

    setUser(mockUser);
    setShowLogin(false);

    setEmail("");
    setPassword("");

    toast.success("Login Successfully !");
  };

  const handleLogout = () => {
    localStorage.removeItem("mockUser");
    setUser(null);

    toast.success("Logged out successfully!");
  };

  return (
    <div className="relative">

      {/* Login / User */}
      {user ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white max-w-[100px] sm:max-w-none truncate">
            {user.name}
          </span>

          <Button
            onClick={handleLogout}
            className="bg-neutral-900 dark:bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-neutral-700 dark:hover:bg-gray-600 text-sm transition-colors"
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setShowLogin(true)}
          className="bg-neutral-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-neutral-700 dark:hover:bg-gray-600 text-sm transition-colors"
        >
          Login
        </Button>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4">

          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full max-w-md rounded-2xl p-5 sm:p-7 relative shadow-xl max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowLogin(false)}
              className="absolute right-4 top-4 text-xl text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Close login modal"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl font-bold mb-2 pr-8">
              Welcome back!
            </h2>

            <p className="text-neutral-500 dark:text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base">
              Login to your account
            </p>

            {/* Login Form */}
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4"
            >
              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-sm sm:text-base">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-neutral-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-lg p-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 font-medium text-sm sm:text-base">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-neutral-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-lg p-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                />
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors"
              >
                Login
              </Button>
            </form>

            <p className="text-xs sm:text-sm text-neutral-400 dark:text-gray-500 text-center mt-4">
              Login to your account
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MockAuth;
