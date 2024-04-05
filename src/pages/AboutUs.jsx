// import React from 'react';
// // import blue from '../images/beautiful-constellations-with-blue-sky.jpg';
// // import blue from '../images/milky-way-full-stars-space.jpg'
// // import blue from '../images/milky-way.jpg'
// import blue from '../images/Blue.jpg'
// import { Element } from 'react-scroll';

// export const AboutUs = () => {
//   return (
//     <Element name="About">

//   {/* <div className = "flex bg-fixed bg-cover bg-center h-screen w-screen opacity-60" style={{ backgroundImage: `url(${blue})`}}>
//     <div className= "items-center justify-end right-10 left-96 absolute z-10">
//       <div className=" bg-white bg-opacity-100 text-black ">
//             <h2 className="text-2xl font-semibold">About Us</h2>
//             <p className="mt-2">DJS NOVA is a student club founded by the students of Dwarkadas J. Sanghvi College of Engineering in the domain of astronomy and astrophysics. NOVA is a non-profit organization dedicated to space research and technology. The club's mission is to raise awareness about the technological advancements in astronomy, explore the wonders of the cosmos, and rekindle the spirit of Indian astronomy.</p>
//         </div>
//     </div>
// </div> */}

// <div className=" h-screen w-full flex">
//   <div className="items-center justify-center">
//     <div
//           className="h-screen w-screen bg-cover bg-no-repeat overflow-hidden z-0"
//           style={{
//             backgroundImage: `url(${blue})`,
//             backgroundSize: '100%',
//             backgroundPosition: 'top',  
//             // opacity: 0.7,
//           }}>

//         <div className="left-40 bg-black bg-opacity-60 h-96 w-96 mt-52 px-4 absolute z-10 text-white border-2 border-white rounded-2xl">
//             <h2 className="mt-7 text-2xl font-semibold underline font-sans">ABOUT US</h2>
//             <p className="flex mt-8 font-serif text-lg">DJS NOVA is founded by the students of Dwarkadas J. Sanghvi College of Engineering in the domain of Astronomy and Astrophysics. NOVA is a non-profit organization dedicated to Space Research and Technology.  Our club's mission is to raise awareness about the technological advancements in astronomy, explore the wonders of the cosmos, and rekindle the spirit of Indian astronomy.</p>
//        </div>
//         </div>
//     </div>
//   </div>
//   </Element>
//   );
// };


// export default AboutUs;


import React from 'react'
import './AboutUs.css'
import { Element } from 'react-scroll';


export default function AboutUs() {
  return (
    <Element name="About" id='about'>
        <div className="container1">
            <div className="title">
                <h2 className="text-white">
                    About us
                </h2>
            </div>

            <div className="content2">
            <div className="vision">
                    <h2>Our Vision:</h2>
                    <p>
                    To foster research and technological advancements in astronomical science and to develop a community of passionate engineers to explore the wonders of the universe.
                    </p>
                </div>
                <div className="mission">
                    <h2>Our Mission:</h2>
                    <p>
                    We aim to promote and foster curiosity among students to gain knowledge, skills and understanding in the study of astronomy. We seek to ignite a sense of passion within the community through a series of seminars, workshops and other events spread throughout the year.
                    </p>
                </div>
                
            </div>


        </div>
    
    </Element>
  )
}
