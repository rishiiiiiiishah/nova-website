import React from 'react';
import img1 from "./img1.png";
import './OtherMagazines.css'
import Footer from '../Footer';
import Navbar from '../Navbar';


const Magazines = () => {

  const img = [{
    image: img1,
    title: "Magazine Volume 1",
    para: "Magazine Unvieling ",
    delay: "0.3s"
    },

  ];

  return (
    <>
    <div className='o-magazine ml-16'>
      <Navbar/>
      <h2>Our Magazines</h2>
      <div className='inner-div'>
      {
        img.map((i) => (
          <div className="cards">
            <div className="img-container" >
              <a href='https://drive.google.com/file/d/1gvi8nNOWma0BkaKTPOzuFow2WXAMx607/view?usp=sharing '>

              <img style={{
                animationDelay: i.delay,
              }} className='img' src={i.image} alt="Magazine"  />
              </a>
            </div>
            <div className='text'>
              <h4>{i.title}</h4>
              <p>{i.para}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Magazines;