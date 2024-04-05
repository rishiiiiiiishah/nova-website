// import React from 'react';
// import logo from '../images/NOVA.jpg';
// // import blue from '../images/Blue.jpg';
// import { Element } from 'react-scroll';

// export const LandingPage = () => {
//   return (
//     <Element name="Logo">

//   <div className="flex bg-fixed">
//       <div className="items-center justify-center">
//         <div>
//         <div
//           className="h-screen w-screen bg-cover bg-no-repeat"
//           style={{
//             backgroundImage: `url(${logo})`,
//             backgroundSize: '100%',
//             backgroundPosition: 'top',
//           }}>

//         </div>
//         {/* <img src="../imag"/>  */}
//     </div>
//     </div>
//     </div>
//     </Element>
//   );
// };


// export default LandingPage;

import React from 'react';
import logo from '../images/NOVA-removebg-preview.png';
// import blue from '../images/Blue.jpg';
import { Element } from 'react-scroll';
// import bg from '../images/dark-space-wallpaper-preview.jpg'
// import bg from '../images/goodbg.jpg'
// import bg from "../images/bgnewwwww.jpg"

export const HeroSection = () => {
  return (
    <Element name="Home" id='home'>
<div className="h-screen w-full">
     {/* <div
          className="h-screen w-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '100%',
            backgroundPosition: 'top',
            // opacity:0.9,

          }}> */}
  <div className="flex h-2/3 justify-center items-center">
      <img src={logo} alt="Logo of DJS NOVA"/>
  </div>
  
  <p className="flex justify-evenly items-start w-full h-1/6 text-white text-2xl md:text-4xl font-thin text-center font-serif italic drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">Chaos in Calm</p>  
  <p className=" flex justify-evenly items-center w-full flex-wrap text-white text-xl md:text-4xl text-center font-sans drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] ">The Official Astronomy & Astrophysics Club of DJ Sanghvi</p>

  {/* </div> */}
  </div>

    </Element>
  );
};


export default HeroSection;
