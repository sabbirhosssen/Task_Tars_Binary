import React from 'react';
import service_pr from './../Images/service_pr.png';

import service_ps from "./../Images/cervice_p4s.png";
import service_pm from "./../Images/service_p3m.png";
import service_prd from "./../Images/service_prd.png";


const Service = () => {
    // const bgStyle = {
    //      backgroundImage: "url(https://dongyi-bd.com/wp-content/uploads/2016/02/bg-demos-prlx.jpg)",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundAttachment: "scroll",
        
    // }

    return (
        <div>
            <div className="zn-bgSource-image  grid grid-cols-4 gap-5 my-12 justify-center justify-items-center"
                >
                <div className="">
                    <img className='w-48 h-32  ' src={service_pr} alt="service_logo" />
                    <h4 className='py-2 text-lg font-mono '>Sourcing</h4>
                    <p className='text-xs text-start px-5'>We have dedicated teams in Asia responsible for sourcing and developing the latest fabrics, finishes and washes ahead of the market. </p>
                </div>
                <div className="jfj">
                   <img className='w-48 h-32 ' src={service_prd } alt="service_logo" />
                    <h4 className='py-2 text-[24] font-mono'>Research & Development</h4>
                    <p className='text-xs text-start px-5'>R&D is the first step in creating new, innovative collections. GFG International's Technical Support teams create samples that suit your unique requirements in order to bring your vision to life. </p>
                </div>
                <div className="jfj">
                    <img className='w-48 h-32  ' src={service_pm} alt="service_logo" />
                    <h4 className='py-2 text-lg font-mono'>Production</h4>
                    <p className='text-xs text-start px-5'>On-site technical experts oversee and control the quality at our factories. In addition, our experienced Quality Control teams offer our partners the transparency and control required to effectively measure the quality of each order.</p>
                </div>
                <div className="">
                    <img className='lg:ml-14 sm:ml-2 w-34 h-24 mb-5' src={service_ps} alt="service_logo" />
                    <h4 className='py-2 text-lg'>Operation Support</h4>
                    <p className='text-xs text-start px-5'>We handle each step of the manufacturing process for you. From sourcing raw materials to shipping the finished product, our internal teams manage every phase of the clothing supply chain. </p>
                </div>
                
                
            </div>
        </div>
    );
};

export default Service;