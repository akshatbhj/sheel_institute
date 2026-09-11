import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu01Icon,
  Cancel01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import Icon from "../icons/Icon";
import logo from "../../assets/sheel_logo.png";
// import tally from "../../assets/partner_11.jpg";
// import tallyCertified from "../../assets/partner_10.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/courses", label: "Courses" },
    { to: "/facilities", label: "Facilities" },
    { to: "/gallery", label: "Gallery" },
    { to: "/e-learning", label: "E-Learning" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="mx-auto max-w-7xl">
        {/* Floating Rounded Island with Glass Transparency on Scroll */}
        <div
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-xl transition-all duration-300 ${
            isScrolled
              ? "bg-slate-950/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
              : "bg-slate-900/60 backdrop-blur-md border border-slate-800/50 shadow-xl shadow-black/30"
          }`}
        >
          {/* Brand Identity */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Sheel Institute - Home"
            >
              <img
                src={logo}
                alt="Sheel Institute"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                width="36"
                height="36"
              />

              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors leading-none">
                  Sheel Institute
                </span>
                <span className="text-[8px] font-medium tracking-wider uppercase text-slate-400 mt-1 leading-none">
                  A Landmark for Professional Education
                </span>
              </div>
            </Link>

            {/* Subtle Tally Affiliation Badge (Wide Screens)
            <div className="hidden 2xl:flex items-center gap-2 border-l border-slate-800 pl-4 py-0.5">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                Partner
              </span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white">
                <img
                  src={tally}
                  alt="Tally Partner"
                  className="h-3.5 w-auto object-contain mix-blend-multiply"
                />
                <div className="w-[1px] h-3 bg-slate-300" />
                <img
                  src={tallyCertified}
                  alt="Tally Certified"
                  className="h-3.5 w-auto object-contain mix-blend-multiply"
                />
              </div>
            </div> */}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors duration-150 ${
                    active
                      ? "text-white bg-slate-800/60 border border-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Apply Online Button */}
            <Link
              to="/apply"
              className="ml-2 inline-flex items-center gap-1.5 px-4.5 py-2 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-xs font-bold text-white transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-95"
            >
              <span>Apply Online</span>
              <Icon
                icon={ArrowUpRight01Icon}
                size={14}
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center xl:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <Icon
                icon={isMenuOpen ? Cancel01Icon : Menu01Icon}
                size={20}
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Mobile Floating Drawer */}
        {isMenuOpen && (
          <div className="pointer-events-auto mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 backdrop-blur-2xl px-4 pt-3 pb-5 shadow-2xl shadow-black/80 xl:hidden">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <Icon
                      icon={ArrowUpRight01Icon}
                      size={15}
                      strokeWidth={2}
                      className="opacity-40"
                    />
                  </Link>
                );
              })}

              <div className="pt-3">
                <Link
                  to="/apply"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white transition-colors"
                >
                  <span>Apply Online</span>
                  <Icon icon={ArrowUpRight01Icon} size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}