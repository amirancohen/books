import React, { createContext, useState } from "react";
import "./App.css";
import { UserProvider } from "./context/user";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Addpost from "./pages/Addpost";
import Editpost from "./pages/Editpost";
import Register from "./auth/Register";
import Login from "./auth/Login";

interface Context {
  admin: boolean;
  setAdmin: Function;
  isLogin: boolean;
  setIsLogin: Function;
}

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="addpost" element={<Addpost />} />
          <Route path="editpost/:id" element={<Editpost />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
