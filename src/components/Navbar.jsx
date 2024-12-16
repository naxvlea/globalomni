import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = ({ onInquiryClick, srollToSection }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // Check if the current page is "About"
  const isAboutPage = location.pathname === "/about";

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-black text-[18px] font-bold cursor-pointer">
            Global Omni Digital
          </p>
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* Show Home Only on About Page */}
          {isAboutPage && (
            <li
              className={`${
                active === "Home" ? "text-black" : "text-gray-700"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive("Home");
                window.scrollTo(0, 0);
              }}
            >
              <Link to="/">Home</Link>
            </li>
          )}

          {/* Navigation Links (excluding submenu) */}
          {navLinks
            .filter((nav) => !isAboutPage || nav.title === "Home" || nav.title === "About" || nav.title === "Contact")  // filter for About page
            .map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-black" : "text-gray-700"
                } hover:text-black text-[18px] font-medium cursor-pointer relative`}
                onMouseEnter={() => nav.submenu && setDropdownOpen(nav.id)}
                onMouseLeave={() => nav.submenu && setDropdownOpen(null)}
              >
                <Link
                  to={nav.id === "About" ? "/about" : "#"}
                  onClick={() => {
                    setActive(nav.title);
                    nav.id === "About" && scrollToSection(nav.id);
                  }}
                >
                  {nav.title}
                </Link>
                {nav.submenu && dropdownOpen === nav.id && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 list-none">
                    {nav.submenu.map((sub) => (
                      <li
                        key={sub.id}
                        className="text-gray-500 text-[14px] cursor-pointer hover:text-black"
                        onClick={() => {
                          setDropdownOpen(null);
                          scrollToSection(sub.id);
                        }}
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          {/* <li
            className="text-secondary hover:text-black text-[18px] font-medium cursor-pointer"
            onClick={onInquiryClick}
          >
            Inquiry
          </li> */}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            style={{ filter: "invert(100%)" }} // Mengubah warna ikon menjadi hitam
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl shadow-lg z-50`}
          >
            <ul className="list-none flex flex-col gap-4">
              {/* Show Home Only on About Page */}
              {isAboutPage && (
                <li
                  className="text-gray-700 font-medium text-[16px] cursor-pointer hover:text-black"
                  onClick={() => {
                    setActive("Home");
                    setToggle(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link to="/">Home</Link>
                </li>
              )}

              {/* Mobile Navigation Links */}
              {navLinks
                .filter((nav) => !isAboutPage || nav.title === "Home" || nav.title === "About" || nav.title === "Contact")
                .map((nav) => (
                  <li key={nav.id} className="text-gray-700 font-medium text-[16px]">
                    <Link
                      to={nav.id === "About" ? "/about" : "#"}
                      className="cursor-pointer hover:text-black flex justify-between items-center"
                      onClick={() => {
                        if (!nav.submenu) setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      {nav.title}
                      {nav.submenu && (
                        <span className="ml-2">
                          {dropdownOpen === nav.id ? "▲" : "▼"}
                        </span>
                      )}
                    </Link>
                    {nav.submenu && dropdownOpen === nav.id && (
                      <ul className="list-none flex flex-col gap-2 ml-4 mt-2">
                        {nav.submenu.map((sub) => (
                          <li
                            key={sub.id}
                            className="text-gray-500 text-[14px] cursor-pointer hover:text-black"
                            onClick={() => {
                              setDropdownOpen(null);
                              setToggle(false);
                              scrollToSection(sub.id);
                            }}
                          >
                            {sub.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              {/* <li
                className="text-secondary font-medium text-[16px] cursor-pointer hover:text-black"
                onClick={() => {
                  setToggle(false);
                  onInquiryClick();
                }}
              >
                Inquiry
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
