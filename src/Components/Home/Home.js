import React from 'react';
import About from '../About/About';
import Footer from '../Footers/Footer';
import Header from '../Headers/Header';
import Service from '../Services/Service';
import Quality from './Homepage/Quality';
import Slider from './Homepage/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider/>
            <About />
            <Quality/>
            {/* <Products/> */}


            <br />
            <Service/>
            <br/>
            <Footer/>  
        </div>
    );
};

export default Home;