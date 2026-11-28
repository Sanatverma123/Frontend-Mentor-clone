
import ThemeToggle from "../../../component/ThemeToggle";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "../../../component/Button";

function HiringNavbar() {
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navbarRef = useRef(null);

  const useCases = [
    { name: "Recruitment agencies", path: "/use-cases/recruitment-agencies" },
    { name: "Talent acquisition", path: "/use-cases/talent-acquisition" },
    { name: "Startups", path: "/use-cases/startups" },
    { name: "Scaleups", path: "/use-cases/scaleups" },
    { name: "Small businesses", path: "/use-cases/small-businesses" },
    { name: "Remote hiring", path: "/use-cases/remote-hiring" },
  ];

  const navLink =
    "font-secondary font-bold italic text-xs xl:text-sm uppercase whitespace-nowrap hover:text-rose-600 dark:text-white dark:hover:text-rose-400 transition-colors";

  // Close menu on outside click and Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setUseCasesOpen(false);
        setMobileOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setUseCasesOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => {
    setUseCasesOpen(false);
    setMobileOpen(false);
  };

  const toggleUseCases = () => {
    setUseCasesOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
    setUseCasesOpen(false);
  };

  return (
    <header
      ref={navbarRef}
      className="relative z-50 w-full border-b border-neutral-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* NAVBAR TOP */}
        <div className="flex items-center justify-between gap-4 min-h-[72px]">

          {/* LOGO */}
          <Link to="/" onClick={closeMenu} className="shrink-0">
            <img
              src="https://hiring.frontendmentor.io/static/logo-desktop.svg"
              alt="Frontend Mentor"
              className="w-28 sm:w-32 lg:w-36 h-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVBAR */}
          <nav className="hidden lg:flex flex-1 items-center justify-end gap-4 xl:gap-6">

            <ul className="flex items-center gap-4 xl:gap-6">

              <li>
                <Link to="/why-us" className={navLink}>
                  Why us
                </Link>
              </li>

              {/* USE CASES */}
              <li className="relative">
                <button
                  type="button"
                  onClick={toggleUseCases}
                  aria-expanded={useCasesOpen}
                  className={`flex items-center gap-2 ${navLink}`}
                >
                  Use cases
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      useCasesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {useCasesOpen && (
                  <div className="absolute top-full right-0 mt-3 min-w-[240px] bg-white dark:bg-gray-800 border border-neutral-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden">
                    <ul className="flex flex-col">
                      {useCases.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            onClick={closeMenu}
                            className="block px-5 py-3 font-secondary font-bold italic text-sm uppercase text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-rose-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <Link to="/pricing" className={navLink}>
                  Pricing
                </Link>
              </li>

              <li>
                <Link to="/blog" className={navLink}>
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/signin" className={navLink}>
                  Sign in
                </Link>
              </li>

              <li>
                <Button
                  to="/register"
                  className="border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 xl:px-5 py-3 font-bold font-secondary italic text-xs xl:text-sm uppercase whitespace-nowrap transition-colors"
                >
                  Start free trial
                </Button>
              </li>

            </ul>

            <ThemeToggle />
          </nav>

          {/* MOBILE / TABLET ACTIONS */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* MOBILE / TABLET MENU */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-200 dark:border-gray-700 py-5">

            <ul className="flex flex-col gap-5">

              <li>
                <Link to="/why-us" onClick={closeMenu} className={navLink}>
                  Why us
                </Link>
              </li>

              {/* MOBILE USE CASES */}
              <li>
                <button
                  type="button"
                  onClick={toggleUseCases}
                  aria-expanded={useCasesOpen}
                  className="flex w-full items-center justify-between font-secondary font-bold italic text-sm uppercase text-gray-900 dark:text-white hover:text-rose-600 transition-colors"
                >
                  Use cases

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      useCasesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {useCasesOpen && (
                  <ul className="flex flex-col gap-3 mt-4 pl-4 border-l-2 border-rose-200 dark:border-gray-700">
                    {useCases.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={closeMenu}
                          className="block py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-rose-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link to="/pricing" onClick={closeMenu} className={navLink}>
                  Pricing
                </Link>
              </li>

              <li>
                <Link to="/blog" onClick={closeMenu} className={navLink}>
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/signin" onClick={closeMenu} className={navLink}>
                  Sign in
                </Link>
              </li>

              <li>
                <Button
                  to="/register"
                  className="inline-flex border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 py-3 font-bold font-secondary italic text-sm uppercase transition-colors"
                >
                  Start free trial
                </Button>
              </li>

            </ul>
          </div>
        )}

      </div>
    </header>
  );
}

export default HiringNavbar;
