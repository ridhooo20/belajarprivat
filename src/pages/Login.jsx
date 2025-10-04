// Login.jsx
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const blueColor = "#0b92cc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
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
          Masuk
        </h2>
        <p className="text-center mb-8" style={{ color: blueColor }}>
          Selamat datang di Teman Belajar
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
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
              Kata Sandi
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="Masukkan password"
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
            {loading ? "Loading..." : "Masuk"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <span
            className="font-semibold"
            style={{ color: "#66b8e0" }}
          >
            Belum punya akun?{" "}
          </span>
          <Link
            to="/register"
            className="font-semibold hover:underline cursor-pointer"
            style={{ color: blueColor }}
          >
            Daftar sekarang
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="font-semibold" style={{ color: "#99ccee" }}>
            atau
          </span>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="mt-6 w-full flex items-center justify-center gap-3 py-3 rounded-lg font-semibold transition-colors duration-300 border-2"
          style={{
            color: loading ? "#99ccee" : blueColor,
            borderColor: loading ? "#99ccee" : blueColor,
            cursor: loading ? "not-allowed" : "pointer",
            backgroundColor: loading ? "transparent" : "transparent",
          }}
        >
          {/* Google Icon SVG tetap sama */}
          <svg
            className="w-6 h-6"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path fill="#4285F4" d="M533.5 278.4c0-18.5-1.5-36.2-4.4-53.5H272v101.4h146.5c-6.3 33.7-25.3 62.3-53.8 81.5v67h86.8c50.7-46.7 79.5-115.5 79.5-196.4z" />
            <path fill="#34A853" d="M272 544.3c72.7 0 133.8-24 178.4-65.1l-86.8-67c-24.1 16.2-55 25.7-91.6 25.7-70.5 0-130.3-47.7-151.7-111.6H30.7v69.9C75.4 481.7 168.4 544.3 272 544.3z" />
            <path fill="#FBBC05" d="M120.3 324.3c-6.1-18-9.6-37.3-9.6-57s3.5-39 9.6-57V140.4H30.7c-19 37.6-30 80-30 124.4s11 86.8 30 124.4l89.6-69.9z" />
            <path fill="#EA4335" d="M272 107.7c39.4 0 74.7 13.6 102.5 40.2l76.9-76.9C404.8 24.6 344.3 0 272 0 168.4 0 75.4 62.6 30.7 156.5l89.6 69.9c21.4-63.9 81.2-111.6 151.7-111.6z" />
          </svg>
          {loading ? "Loading..." : "Login dengan Google"}
        </button>
      </div>
    </section>
  );
};

export default Login;
