import React from 'react';
import aboutp from "./../Images/p-5.jpeg";

const About = () => {
    return (
        <div className='flex flex-row justify-items-center mt-10 mb-12 p-20 space-x-5'>
            <div className='basis-2/4 text-start'>
                <h1 className='text-center text-5xl'>Who we are</h1>
                <br/>
                <div>
                    <p>
                        <h2>ROBE SOURCING INTERNATIONAL Limited is prominent readymade garment buying agent.</h2> 
                        <br />
                        RSIL is a pioneering, dynamic, professionally managed business organization that has strong experience in the field of readymade garments sector with world-class service, quality solutions and value addition services to end products for the textile industries on a global level, beginning from fabrics to fashion through market knowledge, experienced sourcing professionals
                        
                    </p>
                    <p className='text-amber-700'>more</p>
                    
                </div>
            </div>
            <div className='basis-2/4'>
                <img className='h-screen' src={aboutp } alt="" />
            </div>
        </div>
    );
};

export default About;