import React from "react";
import { Element } from "react-scroll";
import p1 from "../../assets/portofolio/p1.jpg";
import p2 from "../../assets/portofolio/p2.jpg";
import p3 from "../../assets/portofolio/p3.jpg";
import p4 from "../../assets/portofolio/p4.jpg";
import p5 from "../../assets/portofolio/p5.jpg";
import p6 from "../../assets/portofolio/p6.jpg";
import p7 from "../../assets/portofolio/p7.jpg";
import p8 from "../../assets/portofolio/p8.jpg";
import p9 from "../../assets/portofolio/p9.jpg";
import p10 from "../../assets/portofolio/p10.jpg";

const Komunitas = () => {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

  return (
    <Element name="Komunitas">
      <section id="portofolio" className="pt-24 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="title mb-12">
            <h1 className="text-blue-500 text-4xl lg:text-5xl font-bold text-center">
              Portofolio
            </h1>
            <p className="text-center text-gray-600 mt-4 text-lg">
              Beberapa dokumentasi kegiatan dan hasil karya terbaik kami
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={img}
                  alt={`Portofolio ${i + 1}`}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Foto {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Komunitas;
