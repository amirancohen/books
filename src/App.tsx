import React, { createContext, useState } from "react";
import "./App.css";
import { UserProvider, useUserData } from "./context/user";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./auth/Login";
import Addpost from "./pages/Addpost";
import Homepage from "./pages/Homepage";
import Editpost from "./pages/Editpost";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const isAdmin = !!localStorage.getItem("admin");
  const userConected = !!localStorage.getItem("login");
  const [admin, setAdmin] = useState(isAdmin);
  const [isLogin, setIsLogin] = useState(userConected);
  const [username, setUsername] = useState("");
  const user = useUserData();

  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="addpost" element={<Addpost />} />
          <Route path="editpost/:id" element={<Editpost />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
