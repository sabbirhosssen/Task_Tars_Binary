import React from 'react';

const Quality = () => {
    return (
        <div className='grid grid-cols-3  gap-7'>
            <div className="text-start border-4 rounded-3xl bg-gray-300 m-2 p-7">
                <h1 className='font-bold mb-2'>QUALITY</h1>
                <p className=' text-sm'>
                    From the first sample, we take care of the quality at every step, we identify the key points of each product to anticipate possible difficulties in production.
                    <br/>
                    <span className=' hover:text-green '>
                        We use the Lectra system to create and print the patterns which we then pass on to the manufacturers. All of these actions are meant to decrease the margin of error. Our in-house lab allows us to run the most common tests on each and every order. Our Quality Department is totally independent from the Merchandising and Production departments, their only goal is to achieve AQL quality requirement.
                    </span>
                </p>
                
            </div>
                        <div className="text-start border-4 rounded-3xl bg-gray-300 m-2 p-7">
                <h1 className='font-bold mb-2'>INNOVATION</h1>
                <p className=' text-sm'>
                    We are constantly looking for new fabrics, accessories, washes, print and embroidery techniques. To do so, we use our different production offices as a multi-sourcing network to offer the greatest variety to our customers.

                    <br/>
                    <span className=' hover:text-green '>
                        
                        We are also constantly trying to improve the production processes in our own factories as well as our partner’s. We also made the decision to locate our Design and Graphic Departments in Dhaka (Bangladesh) to be as close as possible to the production facilities, encouraging and pushing them to perform in innovation and development to meet the ever changing needs of the customer. Our expertise in Denim is highly appreciated by our customers.
                        
                    </span>
                </p>
                
            </div>
                        <div className="text-start border-4 rounded-3xl bg-gray-300 m-2 p-7">
                <h1 className='font-bold mb-2'>COMPLIANCE</h1>
                <p className=' text-sm'>
                    Our production network is based on compliance, we guarantee our customers that their goods are produced in factories where the workers’ rights are respected.


                    <br/>
                    <span className=' hover:text-green '>
                        We have our own Compliance Department that constantly evaluates the factories and provides them with mandatory follow-up improvements. We constantly strive to improve the working conditions, safety and benefits of the workers. This is made possible by a long term partnership with our clients and manufacturers.
                        We are following international standards and code of conduct such as BSCI, Accord, Wrap, ICS…
                        
                    </span>
                </p>
                
            </div>
            
        </div>
    );
};

export default Quality;