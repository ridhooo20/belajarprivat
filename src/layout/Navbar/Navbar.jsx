import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../assets/logo-iqbal.png";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleNav = () => {
    setIsMenu(!isMenu);
  };

  return (
    <section className="nav">
      <nav className="navbar justify-between flex p-3 top-0 fixed w-full ">
        <div>
          <div className="my-auto self-center items-center text-white ease-in-out duration-300 cursor-pointer text-xl font-bold ml-3 flex">
            <img src={logo} className="w-12 h-12 self-center" />
            <h1 className="self-center ml-3">Belajarprivat77</h1>
          </div>
        </div>
        <div className="navbar-nav flex">
          <a
            href="#beranda"
            className="my-auto self-center items-center text-white ease-in-out duration-300 cursor-pointer text-base font-medium mx-12 lg:inline hidden"
          >
            Beranda
          </a>
          <a
            href="#about"
            className="my-auto self-center text-white items-center ease-in-out duration-300 cursor-pointer text-base font-medium mx-12 lg:inline hidden"
          >
            Tentang Kami
          </a>
          <a
            href="#portofolio"
            className="my-auto self-center items-center text-white ease-in-out duration-300 cursor-pointer text-base font-medium mx-12 lg:inline hidden"
          >
            Portofolio
          </a>
          <a
            to="kontakkami"
            smooth={true}
            duration={500}
            className="my-auto self-center items-center text-white ease-in-out duration-300 cursor-pointer text-base font-medium mx-12 lg:inline hidden"
          >
            Kontak Kami
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex right-0 self-center">
          <p
            onClick={toggleNav}
            className="icons mr-4 right-0 hover:text-blue-400 text-2xl font-medium text-white cursor-pointer"
          >
            {" "}
            &#9776;{" "}
          </p>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-44 bg-white text-black transform ${
            isMenu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg`}
        >
          <div className="right-0 flex flex-col items-center space-y-8 mt-10 h-[60%] bg-white">
            {/* Close Button */}
            <div
              className="right-0 close-btn cursor-pointer text-right p-4 text-lg"
              onClick={toggleNav}
            >
              <CiMenuBurger
                onClick={toggleNav}
                className="icon mx-[4.5rem] mt-3 hover:text-blue-400 w-8 h-8 cursor-pointer"
              />
            </div>

            {/* Sidebar Links */}
            <a
              href="#beranda"
              className="my-auto mx-auto self-center items-center hover:text-blue-400 ease-in-out duration-300 cursor-pointer"
            >
              Beranda
            </a>
            <a
              href="#about"
              className="my-auto mx-auto self-center items-center hover:text-blue-400 ease-in-out duration-300 cursor-pointer"
            >
              Tentang Kami
            </a>
            <a
              href="#portofolio"
              className="my-auto mx-auto self-center items-center hover:text-blue-400 ease-in-out duration-300 cursor-pointer"
            >
              Portofolio
            </a>
            <a
              href="#kontakkami"
              className="my-auto mx-auto self-center items-center hover:text-blue-400 ease-in-out duration-300 cursor-pointer"
            >
              Kontak Kami
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
