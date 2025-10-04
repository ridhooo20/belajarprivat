import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Element name="home">
      <section
        className="relative pt-56 h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100"
        id="beranda"
      >
        <div className="text-center self-center max-w-[64rem] mx-auto">
          <h1 className="lg:text-6xl text-3xl font-medium">
            <span className="text-blue-400">Nggak Ngerti</span> Materi?
          </h1>
          <h1 className="lg:text-6xl text-3xl lg:mt-4 mt-2 font-medium">
            Tenang Ada <span className="text-blue-400 ">Belajarprivat77</span>
          </h1>
          <p className="lg:mx-[13rem] md:mx-[6rem] mx-4 lg:mt-12 mt-6 lg:text-2xl text-sm">
            BelajarPrivat77 adalah tempat belajar privat matematika, ngaji,
            renang, dan lain-lain, siap membantu kamu belajar lebih fokus,
            nyaman, dan menyenangkan.
          </p>
          <div className="flex gap-4 mt-6 justify-center">
            <a
              className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-transparent hover:text-indigo-600 transition"
              href="#kontakkami"
            >
              Belajar Sekarang !
            </a>
            <a
              className="inline-block rounded-sm border border-indigo-600 px-6 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              to="/"
              href="#about"
            >
              Kepoin Yuk
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
