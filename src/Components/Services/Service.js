import React from 'react';
import service_pr from './../Images/service_pr.png';

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
            <div className="zn-bgSource-image  grid grid-cols-4 gap-5 justify-center justify-items-center"
                >
                <div className="jfj">
                    <img src={service_pr} alt="service_logo" />
                    <h4 className='py-5 '>Sourcing</h4>
                    <p className='text-sm text-center'>We have dedicated teams in Asia responsible for sourcing and developing the latest fabrics, finishes and washes ahead of the market. </p>
                </div>
                <div className="jfj">
                   <img src={service_prd } alt="service_logo" />
                    <h4 className='py-5 text-sm'>Research & Development</h4>
                    <p>R&D is the first step in creating new, innovative collections. GFG International's Technical Support teams create samples that suit your unique requirements in order to bring your vision to life. </p>
                </div>
                <div className="jfj">
                    <img src="" alt="service_logo" />
                    <h4 className='py-5 text-sm'>Production</h4>
                    <p>On-site technical experts oversee and control the quality at our factories. In addition, our experienced Quality Control teams offer our partners the transparency and control required to effectively measure the quality of each order.</p>
                </div>
                <div className="jfj">
                    <img src="" alt="service_logo" />
                    <h4 className='py-5 text-sm'>Operation Support</h4>
                    <p>We handle each step of the manufacturing process for you. From sourcing raw materials to shipping the finished product, our internal teams manage every phase of the clothing supply chain. </p>
                </div>
                
                
            </div>
        </div>
    );
};

export default Service;