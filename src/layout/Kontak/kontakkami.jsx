import React from "react";
import { FiInstagram, FiPhone } from "react-icons/fi";

const KontakKami = () => {
  return (
    <>
      {/* Bagian Kontak */}
      <section id="kontakkami" className="bg-blue-50 py-16 mt-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Kontak Kami</h2>
          <p className="text-gray-600 mb-10">
            Hubungi kami melalui Instagram atau WhatsApp untuk informasi lebih lanjut
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com/belajarprivat77"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-3 hover:bg-blue-100 transition"
            >
              <FiInstagram size={24} className="text-pink-500" />
              <span className="font-medium text-gray-700">@belajarprivat77</span>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/+6285609496959"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-3 hover:bg-green-100 transition"
            >
              <FiPhone size={24} className="text-green-500" />
              <span className="font-medium text-gray-700">Iqbal Putra</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default KontakKami;
