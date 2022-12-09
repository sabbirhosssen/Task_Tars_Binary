import React from 'react';
// import logo from "./../../Images/logo.jpg";
import logo from "./../../Images/logo-removebg-preview.png";

const Navbers = () => {
    return (
      <div className='flex justify-between  justify-items-center bg-gray-600 text-white py-7 sm:px-5 md:px-12 lg:px-20'>
        <div className='text-start text-xs justify-center'>
          <img className='w-14 h-14' src={logo} alt="" />
          <p className='' style={{fontSize:"8px"}}>ROBE SOURCING INTERNATIONAL LTD.</p>
        </div>
        <div className='flex sm:text-xs sm:space-x-12 lg:space-x-8 text-center justify-center justify-items-center'>
          <div>Home</div>
          <div className=' '>About</div>
          <div>Products</div>
          <div>Our Service</div>
          <div>Contacts</div>
        </div>
        <br />
        <div>
          <div>login</div>
        </div>
    


      </div>
    );
};

export default Navbers;