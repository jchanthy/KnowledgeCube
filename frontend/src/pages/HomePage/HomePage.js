import React, {useEffect} from 'react';
import Hero from "../../components/hero.js";
import HeaderPage from "./HeaderPage.js";
import Footer from "../../components/footer.js";


const HomePage = () => {
    useEffect(() => {
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth",
            }
        )
    }, []);
    return (
        <>

            <HeaderPage/>
            <Hero/>
            <Footer/>

        </>

    );
};

export default HomePage;