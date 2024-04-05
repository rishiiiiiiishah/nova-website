import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import team from '../images/teamicon-removebg-preview.png';
import home from '../images/homeicon-removebg-preview.png';
import contact from '../images/contacticon-removebg-preview.png';
import eventGallery from '../images/eventicon-removebg-preview.png';
import magazine from '../images/magazine.png';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <img className='homelogo pic' src={home} alt="" />
          <p><HashLink to={'/#home'} spy={true} smooth={true} offset={0} duration={500}>Home</HashLink></p>
        </li>
        <li>
          <img className='teamlogo pic' src={team} alt="" />
          <p><HashLink to={'/#about'} spy={true} smooth={true} offset={0} duration={500}>About Us</HashLink></p>
        </li>
        <li>
          <img className='eventlogo pic' src={eventGallery} alt="" />
          <p><Link to='/eventplacard'>Event Gallery</Link></p>
        </li>
        <li>
          <img className='magazinelogo pic' src={magazine} alt="" />
          <p><Link to='/magazine'>Magazines</Link></p>
        </li>
        <li>
          <img className='contactlogo pic' src={contact} alt="" />
          <p><HashLink to={'/#contact'} spy={true} smooth={true} offset={0} duration={500}>Contact Us</HashLink></p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
