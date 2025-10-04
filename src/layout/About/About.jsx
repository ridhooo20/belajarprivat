import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-white pt-20"
      >
        <div className="container px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-blue-400 mb-10">
            Tentang Kami
          </h1>
          <p className="text-sm md:text-base lg:text-2xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
            BelajarPrivat77 adalah layanan belajar privat untuk berbagai bidang,
            mulai dari matematika, ngaji, renang, dan lainnya. Dengan tutor
            berpengalaman, kamu bisa belajar lebih fokus, nyaman, dan terarah
            sesuai kebutuhanmu.
          </p>
        </div>
      </section>
    </Element>
  );
};

export default About;
