import React from "react";
import owner from "../../assets/founder-bp.jpg";
import {
  FiBookOpen,
  FiUserCheck,
  FiClock,
  FiStar,
  FiHeart,
} from "react-icons/fi";

const Why = () => {
  const fitur = [
    {
      icon: <FiBookOpen size={40} color="#fff" />,
      title: "Belajar Lebih Fokus",
      desc: "Privat membuat pembelajaran lebih terarah sesuai kebutuhanmu.",
    },
    {
      icon: <FiUserCheck size={40} color="#fff" />,
      title: "Tutor Berpengalaman",
      desc: "Dibimbing langsung oleh pengajar yang ahli di bidangnya.",
    },
    {
      icon: <FiClock size={40} color="#fff" />,
      title: "Waktu Fleksibel",
      desc: "Atur jadwal belajar sesuai kesibukanmu, lebih bebas dan nyaman.",
    },
    {
      icon: <FiStar size={40} color="#fff" />,
      title: "Pilihan Bidang Beragam",
      desc: "Dari matematika, ngaji, renang, hingga bidang lainnya.",
    },
    {
      icon: <FiHeart size={40} color="#fff" />,
      title: "Belajar Nyaman & Menyenangkan",
      desc: "Suasana belajar privat yang bikin lebih semangat dan nggak tegang.",
    },
  ];

  return (
    <section id="why" className="pt-2 rounded-4xl min-h-screen bg-blue-400">
      <div className="container mx-auto px-4">
        <div className="title pt-24 max-w-4xl mx-auto">
          <h1 className="text-center lg:font-bold font-semibold text-4xl text-white lg:text-5xl">
            Kenapa Harus di Belajarprivat77 ?
          </h1>
          <p className="text-center mt-8 font-normal lg:mx-0 mx-4 text-white tex-sm lg:text-lg">
            BelajarPrivat77 bikin proses belajarmu lebih fokus, nyaman, dan
            menyenangkan — dengan bimbingan tutor berpengalaman, kamu bisa
            memahami materi lebih cepat, semangat tetap terjaga, dan tujuan
            belajarmu tercapai.
          </p>
        </div>
        <div className="fill lg:flex pt-24 pb-12 max-w-6xl mx-auto">
          <div className="self-center m-4 flex-1">
            {fitur.map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className={`flex items-start pb-6 mb-6 border-b border-white last:border-b-0`}
              >
                <div className="mr-5 mt-1">{icon}</div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {title}
                  </h3>
                  <p className="text-white text-opacity-80 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0 relative group">
            <img
              src={owner}
              alt="Owner"
              className="w-4/5 rounded-2xl shadow-lg transition duration-300 ease-in-out group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
              <h2 className="text-white text-3xl font-bold drop-shadow-md">
                Iqbal Putra
              </h2>
              <p className="text-white text-lg mt-1 drop-shadow-md italic">
                Pendiri Belajarprivat77
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
