import Navbar from './components/navbar/Navbar';
import Topview from './components/topview/Topview';
import GetInTouch from './components/get-in-touch/GetInTouch';
import CourseFindingSection from './components/course-finding-section/CourseFindingSection';
import Testimonial from './components/student-testimonials/Testimonials';
import Footer from './components/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
       <div>
         <Navbar/>
         <Topview/>
         <GetInTouch/>
         <CourseFindingSection/>
         <Testimonial/>
         <Footer/>
       </div>
    </div>
  );
}

export default App;
