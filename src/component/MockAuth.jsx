
import { useState } from "react";
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
      alert("Please enter email and password");
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
  };

  const handleLogout = () => {
    localStorage.removeItem("mockUser");
    setUser(null);
  };

  return (
    <div className="relative">
      {/* Login / User */}
      {user ? (
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm">
            {user.name}
          </span>

          <Button
            onClick={handleLogout}
            className="bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-700"
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setShowLogin(true)}
          className="bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-700"
        >
          Login
        </Button>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute right-4 top-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">
              Welcome back!
            </h2>

            <p className="text-neutral-500 mb-6">
              Login to your account
            </p>

            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-neutral-300 rounded-lg p-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-neutral-300 rounded-lg p-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Login
              </Button>
            </form>

            <p className="text-sm text-neutral-400 text-center mt-4">
              login in your Account..
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MockAuth;
