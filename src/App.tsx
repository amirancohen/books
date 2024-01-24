import React from "react";
import "./App.css";
import { UserProvider } from "./context/user";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Addpost from "./pages/Addpost";
import Editpost from "./pages/Editpost";
import Login from "./auth/Login";
import HomepageV2 from "./pages/Homepage";

function App() {
    return (
        <>
            <UserProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<HomepageV2 />} />
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
