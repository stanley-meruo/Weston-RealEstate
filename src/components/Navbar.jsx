import logo from "/WESTON.svg"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 sm:py-5 lg:px-10 xl:px-16">
          <div className="w-20 md:w-24 lg:w-28">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>

          {/*Desktop Menu */}
          <ul className="hidden text-lg md:flex md:justify-between py-3 md:gap-10 lg:gap-12 xl:gap-20">
            <li>
              <Link
                to="/"
                className="hover:border-b-2 hover:border-gray-500 hover:pb-2 hover:text-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:border-b-2 hover:border-gray-500 hover:pb-2 hover:text-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                className="hover:border-b-2 hover:border-gray-500 hover:pb-2 hover:text-gray-700"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:border-b-2 hover:border-gray-500 hover:pb-2 hover:text-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? (
              <BiMenuAltLeft className="w-8 h-8 cursor-pointer" />
            ) : (
              <IoCloseSharp className="w-8 h-8 cursor-pointer" />
            )}
          </div>

          {/* Mobile menu */}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col pt-32 items-center px-10"
            }
          >
            <li className="py-5 text-xl font-medium hover:text-gray-500">
              <Link onClick={handleClick} to="/">
                Home
              </Link>
            </li>
            <div className="w-full h-px bg-gray-500 "></div>
            <li className="py-5 text-xl font-medium hover:text-gray-500">
              <Link onClick={handleClick} to="/about">
                About
              </Link>
            </li>
            <div className="w-full h-[0.5px] bg-gray-500"></div>
            <li className="py-5 text-xl font-medium hover:text-gray-500">
              <Link onClick={handleClick} to="/properties">
                Properties
              </Link>
            </li>
            <div className="w-full h-px bg-gray-500"></div>
            <li className="py-5 text-xl font-medium hover:text-gray-500">
              <Link onClick={handleClick} to="/contact">
                Contact
              </Link>
            </li>
            <div className="w-full h-px bg-gray-500"></div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
