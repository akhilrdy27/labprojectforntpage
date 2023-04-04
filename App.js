
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import './Footer.css';
import './App.css';

function Navbar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  );
}

function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

   /* const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const day = days[date.getDay()];  */


  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <h1>Time : {currentTime.toLocaleTimeString()}</h1>
      <h1>{date.toDateString()}</h1>
       
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact page</h1>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 All rights reserved PDLABNITR.</p>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
