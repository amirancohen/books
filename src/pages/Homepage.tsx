import { useEffect } from "react";
import { useUserData } from "../context/user";
import { getUserData } from "../services/ApiService";
import About from "../components/About";
import MyServices from "../components/MyServices";
import MyWorks from "../components/MyWorks";
import Recommendations from "../components/Recommendations";

function Homepage() {
    const user = useUserData();
    useEffect(() => {
        getUserData().then((res) => {
            user?.setUser(res);
        });
    }, []);
    return (
        <>
            <About />
            <MyServices />
            <MyWorks />
            <Recommendations />
        </>
    );
}

export default Homepage;
