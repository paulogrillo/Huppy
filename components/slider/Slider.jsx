import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




const Slider = () => {
    return (
      <div className="container mx-auto px-4">
        <Slide>

          <div className="each-slide container mx-auto px-4 ">
            <div className="flex justify-center px-4">
            <div className="flex justify-center space-x-11 ">
              <img src="/global/logos/next.jpg" className="w-1/5" alt=""/>
              <img src="/global/logos/big.jpg" className="w-1/6" alt=""/>
              <img src="/global/logos/gatsby.jpg" className="w-1/6" alt=""/>
              <img src="/global/logos/sanity.jpg" className="w-1/6" alt=""/>
              <img src="/global/logos/vercel.jpg" className="w-1/6" alt=""/>
              <img src="/global/logos/netlify.jpg" className="w-1/6" alt=""/>
              


              </div>
                
            </div>
          </div>

          <div className="each-slide container mx-auto px-4 ">
            <div className="flex justify-center px-4" >
              <div className="flex justify-center space-x-11 ">
              <img src="/global/logos/sanity.jpg" className="w-1/6" alt=""/>
              <img src="/global/logos/vercel.jpg" className="w-1/6" alt=""/>
              <img src="/global/logos/netlify.jpg" className="w-1/6" alt=""/>
              <img src="/global/logos/netlify-cms.jpg" className="w-1/6" alt=""/>
              </div>
  
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slider;