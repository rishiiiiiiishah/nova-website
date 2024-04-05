  // import logo from './logo.svg';
//   import './App.css';
  // import { Link, Element } from 'react-scroll';
//   import NavBar1 from '../components/NavBar1';
  import Navbar from '../components/Navbar';
  import Hero from './HeroSection';
  import AboutUs from './AboutUs';
  // import Vision from './Vision';
  // import Departments from './Departments';
  // import FAQs from './pages/FAQs';
  // import ContactUs from './ContactUs';
import Foot from '../components/Footer';
import Contact from './Contact.jsx'
import './landingpage.css'

const LandingPage = () => {
  return (
    <div className="bg">
      {/* <NavBar1/> */}
        <Navbar/>
          <Hero/>
          <AboutUs/>
          <Contact/>
          
      <footer>
        <Foot/>
      </footer>
    </div>
  )
}

export default LandingPage

