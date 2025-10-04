import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Profil = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  // State form
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState(null);
  const [newPhotoFile, setNewPhotoFile] = useState(null);
  const [biodata, setBiodata] = useState("");
  const [minatBelajar, setMinatBelajar] = useState("");

  // Ambil data awal saat user sudah login
  useEffect(() => {
    if (user) {
      setNama(user.displayName || "");
      setEmail(user.email || "");
      setPhotoURL(user.photoURL || null);

      // Ambil biodata dan minat belajar dari localStorage (bisa ganti Firestore)
      const savedBiodata = localStorage.getItem("biodata") || "";
      const savedMinat = localStorage.getItem("minatBelajar") || "";

      setBiodata(savedBiodata);
      setMinatBelajar(savedMinat);
    }
  }, [user]);

  // Handle perubahan file foto
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPhotoFile(file);
      const localUrl = URL.createObjectURL(file);
      setPhotoURL(localUrl);
    }
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("User belum login");
      return;
    }

    try {
      let uploadedPhotoURL = user.photoURL || null;

      // Upload foto ke Firebase Storage jika ada foto baru
      if (newPhotoFile) {
        const storage = getStorage();
        const storageRef = ref(storage, `profile_photos/${user.uid}`);

        await uploadBytes(storageRef, newPhotoFile);

        uploadedPhotoURL = await getDownloadURL(storageRef);
      }

      // Update profil Firebase Authentication
      await updateProfile(user, {
        displayName: nama,
        photoURL: uploadedPhotoURL,
      });

      // Simpan biodata dan minat belajar ke localStorage (bisa ganti Firestore)
      localStorage.setItem("biodata", biodata);
      localStorage.setItem("minatBelajar", minatBelajar);

      alert("Profil berhasil diperbarui!");
      navigate("/dashboard");
    } catch (error) {
      alert("Gagal update profil: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Edit Profil</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Foto Profil */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md bg-gray-200 mb-4 cursor-pointer hover:ring-4 hover:ring-blue-400 transition">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="Foto Profil"
                  className="object-cover w-full h-full"
                />
              ) : (
                <UserCircleIcon className="w-full h-full text-gray-400" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                title="Ganti foto profil"
              />
            </div>
            <p className="text-sm text-gray-500">Klik foto untuk mengganti</p>
          </div>

          {/* Nama */}
          <div>
            <label htmlFor="nama" className="block text-gray-700 font-semibold mb-1">
              Nama
            </label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Masukkan nama"
            />
          </div>

          {/* Email (disabled) */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              disabled
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
              placeholder="Email tidak bisa diubah"
            />
          </div>

          {/* Biodata / Informasi Saya */}
          <div>
            <label htmlFor="biodata" className="block text-gray-700 font-semibold mb-1">
              Informasi Saya (Biodata)
            </label>
            <textarea
              id="biodata"
              rows={3}
              value={biodata}
              onChange={(e) => setBiodata(e.target.value)}
              placeholder="Ceritakan sedikit tentang diri kamu..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Minat Belajar */}
          <div>
            <label htmlFor="minatBelajar" className="block text-gray-700 font-semibold mb-1">
              Minat Belajar
            </label>
            <input
              id="minatBelajar"
              type="text"
              value={minatBelajar}
              onChange={(e) => setMinatBelajar(e.target.value)}
              placeholder="Misal: Front-End, Data Science, Machine Learning..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Tombol Simpan */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Simpan Perubahan
          </button>

          {/* Tombol Batal */}
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="w-full text-center text-blue-600 hover:underline mt-2"
          >
            Batal
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profil;
