import React from 'react'
import './contact.css'
import { Element } from 'react-scroll';


export default function AboutUs() {
  return (
    <Element name="Contact" id='contact'>
        <div className="container1">
            <div className="title">
                <h2>
                    Contact Us
                </h2>
            </div>

            <div className="content2">
            <div className="vision">
                    <p>
                    Email: <a href="mailto:djsnova09@gmail.com" target="_blank" rel="noreferrer"> djsnova09@gmail.com </a>
                    </p>
                    <p>
              Mansi Sharma: <a href="tel:+917977591782" title="Mansi Sharma">+91 79775 91782</a>
                    </p>
                    <p>
                    <a title="LinkedIn" href="https://www.linkedin.com/company/djs-nova/" target="_blank" rel="noreferrer" className="text-white">
              Linkedin
            </a>
                    </p>
                    <p>
                    <a title="Instagram" href="https://www.instagram.com/djsnova/" target="_blank" rel="noreferrer" className="text-white">
              Instagram
            </a> 
                    </p>

                </div>
                
            </div>


        </div>
    
    </Element>
  )
}
