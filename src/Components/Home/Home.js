import React from 'react';
import About from '../About/About';
import Footer from '../Footers/Footer';
import Header from '../Headers/Header';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header/>
            <About />
            <Slider />
            <Footer/>
        </div>
    );
};

export default Home;