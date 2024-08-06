import React from 'react';
import HomePageLayout from './HomePageLayout.js';
import Hero from "../../components/hero.js";


const HomePage = () => {
    return (
        <HomePageLayout
            content={
                <div>
                    <Hero/>
                </div>
            }
        />
    );
};

export default HomePage;