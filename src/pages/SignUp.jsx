// SignUp.jsx
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const blueColor = "#0b92cc";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password harus minimal 6 karakter!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email sudah terdaftar, silakan login atau gunakan email lain.");
      } else {
        alert(err.message);
      }
    }
    setLoading(false);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: `linear-gradient(to bottom right, ${blueColor}, #005f8c)`,
      }}
    >
      <div
        className="max-w-md w-full rounded-2xl shadow-xl p-6"
        style={{ backgroundColor: "white" }}
      >
        <h2
          className="text-3xl font-extrabold text-center mb-2"
          style={{ color: blueColor }}
        >
          Daftar
        </h2>
        <p className="text-center mb-8" style={{ color: blueColor }}>
          Buat akun baru Teman Belajar
        </p>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium"
              style={{ color: blueColor }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                borderColor: "#99ccee",
                color: "#000",
                outlineColor: blueColor,
                boxShadow: `0 0 5px ${blueColor}`,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium"
              style={{ color: blueColor }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="Minimal 6 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                borderColor: "#99ccee",
                color: "#000",
                outlineColor: blueColor,
                boxShadow: `0 0 5px ${blueColor}`,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 font-medium"
              style={{ color: blueColor }}
            >
              Konfirmasi Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              placeholder="Masukkan ulang password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                borderColor: "#99ccee",
                color: "#000",
                outlineColor: blueColor,
                boxShadow: `0 0 5px ${blueColor}`,
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300"
            style={{
              backgroundColor: loading ? "#7cc3ea" : blueColor,
              cursor: loading ? "not-allowed" : "pointer",
              filter: loading ? "brightness(0.8)" : "none",
            }}
          >
            {loading ? "Loading..." : "Daftar"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="font-semibold" style={{ color: "#66b8e0" }}>
            Sudah punya akun?{" "}
          </span>
          <Link
            to="/login"
            className="font-semibold hover:underline cursor-pointer"
            style={{ color: blueColor }}
          >
            Masuk sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
