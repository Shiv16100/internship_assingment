import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Topview from './components/topview/TopView';
import Program from './components/programs/Programs';
import HiringPartners from './components/hiring-partners/HiringPartners';
import Testimonial from './components/student-testimonials/Testimonials';
import Footer from './components/footer/Footer';

function App() {
  return (
     <div>
      <Navbar/>
      <Topview/>
      <Program></Program>
      <HiringPartners></HiringPartners>
      <Testimonial/>
      <Footer/>
      
     </div>
  );
}

export default App;
