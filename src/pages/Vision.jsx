import React from 'react';
import blue from '../images/Blue.jpg';
import { Element } from 'react-scroll';


export const Vision = () => {
  return (
    <Element name="Vision">

  {/* <div className = "bg-fixed">
    <div className="items-center bg-cover bg-center h-screen w-screen opacity-60" style={{ backgroundImage: `url(${blue})` }}>
      <div className="align-center bg-white bg-opacity-100 text-black left-10 absolute">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-2">To foster research and technological advancements in astronomical science and to develop a community of passionate engineers to explore the wonders of the universe. 

</p>
        </div>
    </div>
</div> */}

<div className="flex bg-fixed">
  <div className="items-center justify-center">
    <div
          className="h-screen w-screen bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${blue})`,
            backgroundSize: '100%',
            backgroundPosition: 'top',  
            // opacity: 0.7,

          }}>

        <div className="bg-black bg-opacity-60 h-56 w-96 right-40 mt-52 px-6 absolute z-0 text-white border-2 border-white rounded-2xl">
            <h2 className="mt-6 text-2xl font-semibold underline font-sans">OUR VISION</h2>
            <p className="flex mt-6 font-serif text-lg">To foster research and technological advancements in astronomical science and to develop a community of passionate engineers to explore the wonders of the universe.</p>
       </div>
        </div>
    </div>
  </div>

</Element>

  );
};


export default Vision;
