import React from "react";
import Navbar from "../layout/Navbar/Navbar";
import Hero from "../layout/Hero/Hero";
import About from "../layout/About/About";
import Why from "../layout/Why/Why";
import Komunitas from "../layout/Komunitas/Komunitas";
import KontakKami from "../layout/Kontak/kontakkami";

const Home = () => {
  return (
    <main className="relative min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="w-full">
        <div className="flex-grow">
          <Navbar />
          <Hero />
          <About />
          <Why />
          <Komunitas />
          <KontakKami />
        </div>
        <footer className="bg-blue-500 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} BelajarPrivat77. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;
