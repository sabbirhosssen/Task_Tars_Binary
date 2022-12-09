import React from 'react';

const Navbers = () => {
    return (
      <div className='flex justify-between  justify-items-center bg-black text-white py-7 sm:px-5 md:px-12 lg:px-20'>
        <div className='text-start '>
          <div>LOgo Image</div>
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