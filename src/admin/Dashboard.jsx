import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";

const getUsernameFromEmail = (email) => {
  if (!email) return "User";
  return email.split("@")[0];
};

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="w-full">
        <Admin/>
      </div>
    </main>
  );
};

export default Dashboard;
