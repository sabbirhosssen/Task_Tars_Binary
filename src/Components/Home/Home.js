import React from 'react';
import About from '../About/About';
import Footer from '../Footers/Footer';
import Header from '../Headers/Header';
import Products from '../Products/Products';
import Service from '../Services/Service';
import Slider from '../Slider/Slider';
import Quality from './Homepage/Quality';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider/>
            <About />
            <Quality/>
            <Products/>


            <br />
            <Service/>
            <br/>
            <Footer/>  
        </div>
    );
};

export default Home;