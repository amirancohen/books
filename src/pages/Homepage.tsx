import { useEffect } from "react";

import About from "../components/About";
import MyServices from "../components/MyServices";
import Recommendations from "../components/Recommendations";
import MyWorks from "../components/MyWorks";
import AddRecommendation from "../components/addRecommendation";
import { useUserData } from "../context/user";
import { getUserData } from "../services/ApiService";




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
      <AddRecommendation />
      <Recommendations />
    </>
  );
}

export default Homepage;
