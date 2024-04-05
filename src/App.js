  // import logo from './logo.svg';
  import './App.css';
  import Navbar from './components/Navbar';
  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import EventGalleryPage from './EventGalleryPage';

  function App() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/event-gallery" component={EventGalleryPage} />
          {/* Other routes */}
        </Switch>
      </Router>
    );
  }
  
  export default App;