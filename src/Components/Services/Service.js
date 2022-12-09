import React from 'react';

const Service = () => {
    const bgStyle = {
         backgroundImage: "url(https://dongyi-bd.com/wp-content/uploads/2016/02/bg-demos-prlx.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        
    }

    return (
        <div>
            <div className="zn-bgSource-image h-screen grid grid-cols-4 gap-5 justify-center justify-items-center"
                style={bgStyle}>
                <div className="jfj">kgfsdkjskfdgs</div>
                <div className="jfj">kgfsdkjskfdgs</div>
                <div className="jfj">kgfsdkjskfdgs</div>
                <div className="jfj">kgfsdkjskfdgs</div>
                
            </div>
        </div>
    );
};

export default Service;