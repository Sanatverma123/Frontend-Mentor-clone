import { useState } from "react";

import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Route,
  MonitorSmartphone,
  Code2,
  Newspaper,
  BookOpen,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const closeMenus = () => {
    setActiveDropdown(null);
    setMenuOpen(false);
  };

  const exploreItems = [
    { title: "Learning Paths", icon: Route, path: "/learning-paths" },
    { title: "Challenges", icon: MonitorSmartphone, path: "/challenges" },
    { title: "Solutions", icon: Code2, path: "/solutions" },
    { title: "Articles", icon: Newspaper, path: "/articles" },
    { title: "Guides", icon: BookOpen, path: "/guides" },
  ];

  const companyItems = [
    { title: "Train Developers", icon: Users, path: "/practice" },
    { title: "Hire Developers", icon: Users, path: "/practice" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-100 via-white to-sky-100 <nav relative  top-0 z-50 w-full border-b border-blue-100 shadow-sm">
      <div
        className="bg-blue-500 font-semibold text-center text-white px-5 py-2"
        style={{
          backgroundColor: "rgb(23, 23, 23)",
          color: "rgb(255, 255, 255)",
        }}
      >
        🎉 Black Friday: 30% off Pro yearly, for as long as you're subscribed –{" "}
        <a className="underline hover:no-underline" href="/pro#plans">
          Upgrade now
        </a>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* NAVBAR */}
        <div className="flex items-center justify-between py-3 md:py-4 lg:py-3">
          {/* LOGO AND MENU BUTTON */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* MOBILE + TABLET MENU */}
            <button
              className="lg:hidden text-slate-800 hover:text-blue-600 transition"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setActiveDropdown(null);
              }}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>

            {/* LOGO */}
            <Link to="/" onClick={closeMenus}>
              <img
                src={logo}
                alt="Frontend Mentor"
                className="w-28 sm:w-32 md:w-36 lg:w-36 h-auto object-contain"
              />
            </Link>
          </div>

          {/* LAPTOP + DESKTOP NAVBAR */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-4 xl:gap-6">
              {/* EXPLORE */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("explore")}
                  className="flex items-center text-sm font-bold italic uppercase tracking-wide text-slate-800 hover:text-blue-600 transition"
                >
                  Explore
                  <ChevronDown
                    size={17}
                    className={`ml-1.5 transition-transform duration-300 ${
                      activeDropdown === "explore" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "explore" && (
                  <div className="absolute top-full left-0 mt-4 w-52 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    {exploreItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.title}
                          to={item.path}
                          onClick={closeMenus}
                          className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 last:border-0 hover:bg-slate-50 transition"
                        >
                          <Icon size={23} className="text-black shrink-0" />

                          <span className="text-sm font-bold italic uppercase text-slate-900 whitespace-nowrap">
                            {item.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>

              {/* FOR COMPANIES */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("companies")}
                  className="flex items-center text-sm font-bold italic uppercase tracking-wide text-slate-800 hover:text-blue-600 transition"
                >
                  For companies
                  <ChevronDown
                    size={17}
                    className={`ml-1.5 transition-transform duration-300 ${
                      activeDropdown === "companies" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "companies" && (
                  <div className="absolute top-full left-0 mt-4 w-60 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    {companyItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.title}
                          to={item.path}
                          onClick={closeMenus}
                          className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 last:border-0 hover:bg-slate-50 transition"
                        >
                          <Icon size={23} className="text-black shrink-0" />

                          <span className="text-sm font-bold italic uppercase text-slate-900">
                            {item.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>

              {/* UNLOCK PRO */}
              <li>
                <Link
                  to="/portfolio"
                  onClick={closeMenus}
                  className="text-sm font-bold italic uppercase tracking-wide text-slate-800 hover:text-blue-600 transition whitespace-nowrap"
                >
                  Unlock
                  <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded-md ml-1.5">
                    Pro
                  </span>
                </Link>
              </li>

              {/* GITHUB BUTTON */}
              <li>
                <Button
                  href="https://github.com/login"
                  className="text-xs uppercase tracking-wide whitespace-nowrap"
                >
                  Log in with GitHub
                  <ArrowUpRight size={15} />
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* MOBILE + TABLET MENU */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-2 py-4 md:py-5 border-t border-blue-100">
            {/* EXPLORE */}
            <button
              onClick={() => toggleDropdown("explore")}
              className="flex items-center justify-between text-sm md:text-base font-bold uppercase text-slate-800 py-3 hover:text-blue-600 transition"
            >
              Explore
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  activeDropdown === "explore" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeDropdown === "explore" && (
              <div className="flex flex-col gap-4 pl-4 py-2 border-l-2 border-blue-200">
                {exploreItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={closeMenus}
                      className="flex items-center gap-3 text-sm md:text-base text-slate-700 hover:text-blue-600 transition"
                    >
                      <Icon size={20} />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* FOR COMPANIES */}
            <button
              onClick={() => toggleDropdown("companies")}
              className="flex items-center justify-between text-sm md:text-base font-bold uppercase text-slate-800 py-3 hover:text-blue-600 transition"
            >
              For companies
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  activeDropdown === "companies" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeDropdown === "companies" && (
              <div className="flex flex-col gap-4 pl-4 py-2 border-l-2 border-blue-200">
                {companyItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={closeMenus}
                      className="flex items-center gap-3 text-sm md:text-base text-slate-700 hover:text-blue-600 transition"
                    >
                      <Icon size={20} />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* UNLOCK PRO */}
            <Link
              to="/portfolio"
              onClick={closeMenus}
              className="text-sm md:text-base font-bold uppercase text-slate-800 py-3 hover:text-blue-600 transition"
            >
              Unlock Pro
            </Link>

            {/* GITHUB BUTTON */}
            <div className="pt-2">
              <Button
                href="https://github.com/login"
                className="w-full justify-center md:w-auto"
              >
                Log in with GitHub
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
