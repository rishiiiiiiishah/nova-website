import React from 'react';
// import blue from '../images/Blue.jpg';
import { Element } from 'react-scroll';

export const ContactUs = () => {
  return (
    <Element name="Contact">
      {/* <div>
  <div className = "bg-fixed">
    <div className="items-center bg-cover bg-center h-screen w-screen opacity-60" style={{ backgroundImage: `url(${blue})` }}>
      <div className="align-center bg-white bg-opacity-100 text-black right-10 absolute">
            <h2 className="text-2xl font-semibold">FAQs</h2>
            <p className="mt-2">Your description or additional text.</p>
        </div>
    </div>
</div>
</div> */}

<div className="flex bg-fixed">
  <div className="items-center justify-center">
    {/* <div
          className="h-screen w-screen bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${blue})`,
            backgroundSize: '100%',
            backgroundPosition: 'top',
            // opacity: 0.7,
          }}> */}

        <div className="bg-black bg-opacity-60 h-80 w-96 right-40 mt-52 px-4 absolute z-0 text-white border-2 border-white rounded-2xl font-serif text-xl">
            <h2 className="mt-8 text-2xl font-semibold underline font-sans">CONTACT US</h2>
            {/* <p className="flex mt-10">To foster research and technological advancements in astronomical science and to develop a community of passionate engineers to explore the wonders of the universe.</p> */}
            
            <p className="text-white mt-7">
            Email: <a href="mailto:djsnova09@gmail.com" target="_blank" rel="noreferrer"> djsnova09@gmail.com </a>
              </p>
            
            
            <p className="text-white mt-5">
              Mansi Sharma: <a href="tel:+917977591782" title="Mansi Sharma">+91 79775 91782</a>
            </p>
{/* 
            <p className="mt-2 text-white">
              Address: <a href="https://goo.gl/maps/UUdvCoeZa2aycxBv7" target="_blank" rel="noreferrer"> SVKM's Dwarkadas J. Sanghvi College of Engineering, Vile Parle West, Mumbai-400056
              </a>
            </p> */}

            <p className="text-white mt-5">
              <a title="LinkedIn" href="https://www.linkedin.com/company/djs-nova/" target="_blank" rel="noreferrer" className="text-white">
              {/* <svg className="w-6 h-6" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg> */}
              Linkedin
            </a>
            </p>

            <p className="text-white mt-5">
             <a title="Instagram" href="https://www.instagram.com/djsnova/" target="_blank" rel="noreferrer" className="text-white">
              {/* <svg className="w-6 h-6" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3z"></path>
              </svg> */}
              Instagram
            </a> 
            </p>
       </div>
        </div>
    </div>
  {/* </div> */}

</Element>
  );
};


export default ContactUs;
