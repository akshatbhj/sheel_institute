import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Menu01Icon,
  Cancel01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

import Icon from "../icons/Icon";

import logo from "../../assets/sheel_logo.png";
import tally from "../../assets/partner_11.jpg";
import tallyCertified from "../../assets/partner_10.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-700 font-bold whitespace-nowrap"
      : "text-slate-600 hover:text-blue-700 font-medium transition whitespace-nowrap";

  const closeMenu = () => setIsMenuOpen(false);

  const mobileNavLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/courses", label: "Courses" },
    { to: "/facilities", label: "Facilities" },
    { to: "/gallery", label: "Gallery" },
    { to: "/e-learning", label: "E-Learning" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Brand Section */}
          <div className="flex min-w-0 shrink-0 items-center gap-3">
            <Link
              to="/"
              className="shrink-0"
              aria-label="Sheel Institute - Home"
            >
              <img
                src={logo}
                alt="Sheel Institute Logo"
                className="h-10 w-auto md:h-12"
              />
            </Link>

            <Link to="/" className="flex shrink-0 flex-col justify-center">
              <span className="mb-1 whitespace-nowrap text-base font-extrabold leading-none tracking-tight text-[#003380] md:text-lg">
                Sheel Institute
              </span>

              <span className="whitespace-nowrap text-[10px] font-bold leading-none tracking-wide text-[#e60000] md:text-[11px]">
                A Landmark for Professional Education
              </span>
            </Link>

            {/* Tally Partner Logos */}
            <div className="ml-3 hidden shrink-0 items-center gap-3 border-l border-slate-200 pl-4 2xl:flex">
              <img
                src={tally}
                alt="Tally Partner"
                className="h-9 w-auto"
                loading="lazy"
                decoding="async"
              />

              <img
                src={tallyCertified}
                alt="Tally Learning"
                className="h-9 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex 2xl:gap-5">
            <Link to="/" className={isActive("/")}>
              Home
            </Link>

            <Link to="/about" className={isActive("/about")}>
              About Us
            </Link>

            <Link to="/courses" className={isActive("/courses")}>
              Courses
            </Link>

            <Link to="/facilities" className={isActive("/facilities")}>
              Facilities
            </Link>

            <Link to="/gallery" className={isActive("/gallery")}>
              Gallery
            </Link>

            <Link to="/e-learning" className={isActive("/e-learning")}>
              E-Learning
            </Link>

            <Link to="/contact" className={isActive("/contact")}>
              Contact Us
            </Link>

            {/* Apply CTA */}
            <Link
              to="/apply"
              className="
                group ml-1 inline-flex items-center gap-2
                whitespace-nowrap rounded-lg
                bg-amber-500 px-4 py-2
                font-medium text-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-amber-600
                hover:shadow-md
                xl:px-5 xl:py-2.5
              "
            >
              <span>Apply Online</span>

              <Icon
                icon={ArrowUpRight01Icon}
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
                className="
                  transition-transform duration-300 ease-out
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* Mobile / Tablet Menu Toggle */}
          <div className="flex items-center xl:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="
                group flex h-11 w-11
                items-center justify-center
                rounded-xl
                border border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-700
                hover:shadow-md
                active:translate-y-0
                active:scale-95
              "
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Icon
                icon={isMenuOpen ? Cancel01Icon : Menu01Icon}
                size={25}
                strokeWidth={1.8}
                aria-hidden="true"
                className="
                  transition-transform duration-300 ease-out
                  group-hover:scale-110
                "
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`
          absolute left-0 w-full overflow-hidden
          border-t border-slate-100
          bg-white shadow-lg
          transition-all duration-300 ease-out
          xl:hidden
          ${
            isMenuOpen
              ? "visible max-h-150 opacity-100"
              : "invisible max-h-0 opacity-0"
          }
        `}
      >
        <div className="space-y-1 px-4 pb-6 pt-3">
          {mobileNavLinks.map((link) => {
            const active = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`
                  flex items-center justify-between
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  }
                `}
              >
                <span>{link.label}</span>

                <Icon
                  icon={ArrowUpRight01Icon}
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className={`
                    transition-all duration-200
                    ${
                      active
                        ? "translate-x-0 text-blue-700"
                        : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link
            to="/apply"
            onClick={closeMenu}
            className="
              group mt-4 flex w-full
              items-center justify-center gap-2
              rounded-xl
              bg-amber-500
              px-5 py-3
              font-medium text-white
              shadow-sm
              transition-all duration-300
              hover:bg-amber-600
              hover:shadow-md
            "
          >
            <span>Apply Online</span>

            <Icon
              icon={ArrowUpRight01Icon}
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
