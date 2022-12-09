import React from 'react';
import { BsFacebook, BsFillPlayFill, BsLinkedin } from "react-icons/bs";
import { MdCall } from "react-icons/md";
const Footer = () => {
    return (
        <div className='bg-gray-700  text-white pb-12  pt-12'>
            


            <div className='grid grid-cols-4  gap-2 justify-around justify-items-center   '>
                <div className="">
                    <h5 className='inline mb-5'> ROBE SOURCING INTERNATIONAL LTD.</h5>
                    <p className='text-start  mt-5 w-fit'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    </p>
                </div>
                <div className="text-start">
                    <h4 className='mb-4'>Details</h4>
                    <ul className='text-xs'>
                        <li>Join Us</li>
                        <li>Products</li>
                        <li>Product Gallery</li>
                        
                        
                    </ul>
                </div>
                <div className="h2">
                    <div className="text-start">
                        <h4 className='mb-4'>Company Profile</h4>
                    <ul className='text-xs'>
                        <li className='inline'>Home</li>
                        <li className='block'>About Us</li>
                        <li className='inline'>Our Mission & Vision</li>
                        <li className='inline'>Business Information</li>
                        <li className='inline'>PHOTO GALLERY</li>
                            
                           
                    </ul>
                </div>
                </div>
                <div className="text-start">
                    <div className="text-xs">
                        <div className="text-lg mb-4">Address:</div>
                        <div className="hf">House # 5, Road # 03,</div>
                        <div className="hf">Sector # 09. Uttara-1230, Dhaka, Bangladesh</div>
                        <div className="hf">Phone: (+880) 1978047557 </div>
                        <div className="ml-10">  (+880) 9611832626  </div>
                    </div>
                
                </div>
            </div>


            <div className='bg-gray-900 flex justify-between px-12 my-8'>
                <p className=''>
                robesourcing.com ©2020
                </p>
                <div className='flex flex-row justify-center justify-items-center gap-5'>
                    <div className=''>Get Social</div>
                    <div className=''><BsFacebook/></div>
                    <div className=''> <BsLinkedin/> </div>
                    <div className=''> <BsFillPlayFill /></div>
                    <div className="hhk"><MdCall/></div>
                    <div className="hhk">SUPPORT POLICY</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;