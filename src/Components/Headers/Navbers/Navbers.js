import React from 'react';

const Navbers = () => {
    return (
        <div>
            
      <div className='flex sm:text-xs sm:space-x-12 lg:space-x-12 sm:p-5 lg:p-13 text-center justify-center justify-items-center bg-black text-white py-7'>
         <div className='text-start justify-items-start'>
        <div>LOgo Image</div>
        </div>
        
        <div>Home</div>
        <div className='underline'>About</div>
        <div>ProvideMe</div>
        <div>Product</div>
        <div>Contact</div>
      </div>
            <br />
       <h1 className="text-3xl font-bold underline text-start">
      Hello world!
      </h1>
      <h2 className='text-1xl text-start'> I am Sabbir Hossen</h2>


        </div>
    );
};

export default Navbers;