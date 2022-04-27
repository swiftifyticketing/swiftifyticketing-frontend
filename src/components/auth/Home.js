import React from "react";
import Footer from "../layout/Footer";
import HeroSection from "../layout/HeroSection";
import HomeCards from "../layout/HomeCards";


function Home(){
    return(
        <>
        <HeroSection />
        <HomeCards/>
        <Footer />
        </>
    );
}
export default Home;