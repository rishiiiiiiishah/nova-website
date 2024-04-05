import React, { useState } from 'react';
import './EventGallery.css';
import ImageModal from '../Imagemodal/ImageModal';
// import { Element } from 'react-scroll';
import Foot from '../Footer.jsx';

import video from '../../assets/video.mp4';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img10 from '../../assets/img10.jpg';
import Navbar from '../Navbar.jsx';

const EventGallery = () => {
  const [modalData, setModalData] = useState(null);

  let data = [
    { id: 1, imgSrc: img1, desc: 'Setting up of equipment' },
    { id: 2, imgSrc: img2, desc: 'Nutritous Breakfast' },
    { id: 3, imgSrc: img3, desc: "Nature's Tunnel" },
    { id: 4, imgSrc: img4, desc: 'The Boat House' },
    { id: 5, imgSrc: img5, desc: 'Prepossessing Garden' },
    { id: 6, imgSrc: img6, desc: 'Interesting Botanical Preachment' },
    { id: 7, imgSrc: img7, desc: 'Organic Roses settlement' },
    { id: 10, imgSrc: img10, desc: 'The Sun Set' },
  ];

  const handleImageClick = (imgSrc, desc) => {
    setModalData({ imgSrc, desc });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
    <div className="ml-20">
    <Navbar/>

     <section className="home">
        <video src={video} muted autoPlay loop type="video/mp4" className="vid"></video>
        
<div className="homeContent container">
          <h1 className="text-4xl">Welcome to DJS Nova's
            <br/> Event Gallery</h1>
        </div>
      </section>
      <div className="imgs">
        <div className="images">
          {data.map((item, index) => (
            <div className="pics" key={index} onClick={() => handleImageClick(item.imgSrc, item.desc)}>
              <img src={item.imgSrc} alt="gallery" />
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {modalData && (
        <ImageModal selectedImage={modalData.imgSrc} description={modalData.desc} onClose={closeModal} />
      )}
    </div>
    <footer>
      <Foot/>
    </footer>
    </>
  );
};

export default EventGallery;