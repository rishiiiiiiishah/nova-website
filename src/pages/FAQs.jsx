import React from 'react';
// import blue from '../images/Blue.jpg';
import { Element } from 'react-scroll';

export const FAQs = () => {
  return (
    <Element name="FAQ">
{/* 
  <div className = "bg-fixed">
    <div className="items-center bg-cover bg-center h-screen w-screen opacity-60" style={{ backgroundImage: `url(${blue})` }}>
      <div className="align-center bg-white bg-opacity-100 text-black left-10 absolute">
            <h2 className="text-2xl font-semibold">FAQs</h2>
            <p className="mt-2">Your description or additional text.</p>
        </div>
    </div>
</div> */}

<div className="h-screen flex bg-fixed">
  <div className="items-center justify-center">
    {/* <div
          className="h-screen w-screen bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${blue})`,
            backgroundSize: '100%',
            backgroundPosition: 'top',  
            opacity: 0.7,

          }}> */}

        <div className="bg-black bg-opacity-60 h-96 w-96 left-40 mt-52 px-4 absolute z-0 text-white border-2 border-white rounded-2xl font-serif">
            <h2 className="mt-5 text-2xl font-semibold underline">FAQs</h2>
            <p className="flex mt-10">DJS NOVA is a student club founded by the students of Dwarkadas J. Sanghvi College of Engineering in the domain of astronomy and astrophysics. NOVA is a non-profit organization dedicated to space research and technology. The club's mission is to raise awareness about the technological advancements in astronomy, explore the wonders of the cosmos, and rekindle the spirit of Indian astronomy.</p>
       </div>
        </div>
    </div>
  {/* </div> */}

</Element>

  );
};


export default FAQs;
