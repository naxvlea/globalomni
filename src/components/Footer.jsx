import { Link } from "react-router-dom";
import { logo1 } from "../assets";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="Footer" className="bg-black-200 lg:px-14 p-4 mx-auto mt-5 lg:mt-5 py-4 text-white">
      <div className="my-6 flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="lg:w-7/12 space-y-6">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer text-2xl font-semibold flex items-center ml-4"
          >
            <img
              src={logo1}
              alt="logo"
              className="w-10 inline-block overflow-hidden text-ellipsis items-center"
            />
            <span>Global Omni Digital</span>
          </Link>
          <p className="ml-6 text-white">
            Jl. Pararaton Raya No.9 <br />
            Kuta, Bali 80361
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="lg:w-5/12 flex flex-col lg:flex-row flex-wrap justify-between gap-9 items-start mt-5 lg:mt-0">
          <div className="space-y-4 mr-[100px]">
            <h4 className="text-xl font-semibold">Contacts</h4>
            <ul className="space-y-3">
              <p className="block text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2 h-5 w-5 text-white">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                info@globalomnidigital.com
              </p>
              <p className="block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2 h-5 w-5 text-white">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd "
                  />
                </svg>
                +62 811 4760 6060
              </p>
            </ul>
          </div>
          {/* Navigation Links */}
          <ul className="flex space-x-6 flex-wrap justify-center mt-4 lg:mt-0 items-center mx-auto ">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="hover:text-white text-[18px] font-medium cursor-pointer whitespace-nowrap "
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

        </div>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        {/* Social Links */}
        <div className="flex items-center space-x-5 justify-center sm:justify-start">
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center" href="https://www.facebook.com/share/NY9eBTzZyXdW7EKA/?mibextid=qi2Omg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center text-3xl md:text-xl" href="https://www.tiktok.com/@global.omni.digital" target="_blank">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center" href="https://www.instagram.com/globalomnidigital">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center" href="https://www.linkedin.com/company/pt-gpam/">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center" href="https://wa.me/+6281147606060">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48a11.933 11.933 0 0 0-8.46-3.48c-6.63 0-12 5.37-12 12 0 2.12.56 4.21 1.57 6.06l-1.57 5.41 5.4-1.56c1.85 1.08 3.87 1.65 5.99 1.65 6.63 0 12-5.37 12-12 0-1.71-.34-3.34-.94-4.72zm-3.74 7.74l-.38.38c-.23.24-.57.23-.79-.01l-.94-1.04c-.12-.12-.13-.31-.03-.44 1.06-1.57.29-3.68-1.47-4.46-.12-.08-.18-.19-.24-.3-.07-.11-.11-.23-.2-.34-.25-.39-.46-.66-.74-.89-.29-.23-.63-.4-.99-.54-.29-.11-.61-.17-.93-.21-.7-.07-1.39.13-1.98.43-.15.11-.27.25-.39.39-.56-.18-1.15-.31-1.75-.44-.23-.08-.44.05-.61.22-.19.18-.31.42-.35.66-.22.16-.45.27-.68.38-.33.16-.68.31-1.02.47-.54.32-.91.81-.99 1.43-.15.72.05 1.48.51 2.08.19.22.43.36.69.47.45.26.96.37 1.46.33.46-.03.92-.09 1.38-.22-.31-.19-.6-.41-.89-.65z" />
            </svg>
          </a>
        </div>
        <div className="text-center sm:text-left">
          <p>©2024 Global Omni Digital</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
