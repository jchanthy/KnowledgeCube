import React from 'react';
import Hero from "../../components/hero.js";
import HeaderPage from "./HeaderPage.js";
import Footer from "../../components/footer.js";


const HomePage = () => {
    return (
        <>

            <HeaderPage/>
            <Hero/>
            <Footer/>

        </>

    );
};

export default HomePage;