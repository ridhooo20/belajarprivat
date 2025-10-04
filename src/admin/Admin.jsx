import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Admin = () => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [photoURL, setPhotoURL] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [profil, setProfil] = useState({
    nama: "",
    biodata: "",
    minatBelajar: "",
  });

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      setPhotoURL(user.photoURL || null);

      setProfil({
        nama: user.displayName || user.email.split("@")[0],
        biodata: localStorage.getItem("biodata") || "Belum ada biodata tersedia.",
        minatBelajar: localStorage.getItem("minatBelajar") || "Belum ada minat belajar yang diisi.",
      });
    }
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setSidebarOpen(false); // close sidebar on mobile after menu click
  };

  const goToProfil = () => {
    navigate("/profil");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Header with Hamburger */}
      <header className="md:hidden flex items-center justify-between bg-white shadow px-4 py-3 fixed w-full z-20">
        <div className="font-bold text-2xl">Admin</div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {sidebarOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md flex flex-col z-30 transform md:transform-none transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 font-bold text-3xl border-b border-gray-200">Admin</div>
        <nav className="flex flex-col flex-grow p-4 space-y-3">
          {[
            { name: "dashboard", label: "Dashboard", icon: HomeIcon },
            { name: "kursus", label: "Kursus", icon: BookOpenIcon },
            { name: "teman", label: "Teman", icon: UserGroupIcon },
            { name: "pengaturan", label: "Pengaturan", icon: Cog6ToothIcon, bottom: true },
          ].map(({ name, label, icon: Icon, bottom }) => (
            <button
              key={name}
              onClick={() => handleMenuClick(name)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-blue-100 transition
                ${activeMenu === name ? "bg-blue-200 font-semibold text-blue-700" : ""}
                ${bottom ? "mt-auto" : ""}`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-lg">{label}</span>
            </button>
          ))}

          <button
            onClick={handleLogout}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold transition"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Overlay when sidebar open on mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-30 z-20 md:hidden"
          aria-hidden="true"
        ></div>
      )}

      {/* Main content */}
      <main className="flex-grow p-6 pt-20 md:pt-6 max-w-full ml-0 md:ml-64 transition-all duration-300">
        {activeMenu === "dashboard" && (
          <>
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profil Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-2xl mb-6 w-full border-b border-gray-300 pb-3">Profil Saya</h3>
                <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center mb-6 shadow-inner">
                  {photoURL ? (
                    <img
                      src={photoURL}
                      alt="Foto Profil"
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = ""; // fallback kosong
                      }}
                    />
                  ) : (
                    <UserCircleIcon className="w-24 h-24 text-gray-400" />
                  )}
                </div>
                <p className="font-semibold text-xl text-gray-900 mb-2">{profil.nama}</p>
                <p className="text-blue-600 italic text-sm mb-8">Minat belajar: {profil.minatBelajar}</p>
                <button
                  onClick={goToProfil}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition"
                >
                  Edit Profil
                </button>
              </div>

              {/* Kelas Saya Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-2xl mb-6 border-b border-gray-300 pb-3">Kelas Saya</h3>
                <p className="text-gray-700 italic">Anda belum terdaftar pada kelas manapun saat ini.</p>
              </div>

              {/* Informasi Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-2xl mb-6 border-b border-gray-300 pb-3">Informasi</h3>
                <p className="text-gray-700">haii gw ridhoo</p>
              </div>
            </div>
          </>
        )}

        {activeMenu === "kursus" && (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Kursus</h2>
            <p className="text-gray-700">Daftar kursus akan ditampilkan di sini.</p>
          </div>
        )}

        {activeMenu === "teman" && (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Teman</h2>
            <p className="text-gray-700">Fitur untuk mencari teman akan hadir di sini.</p>
          </div>
        )}

        {activeMenu === "pengaturan" && (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Pengaturan</h2>
            <p className="text-gray-700">Pengaturan akun dan preferensi.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
