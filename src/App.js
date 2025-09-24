import logo from './logo.svg';
import './App.css';
import Home  from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './pages/service/service';
import Experience from './pages/experience/experience';
import About from './pages/about/about';
import Faqs from './pages/FAQs/Faqs';



function App() {
  return (
<Router>
     
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/service' element= {<Service />} />
      <Route path='/experience' element= {<Experience />} />
      <Route path='/about' element= {<About />} />
      <Route path='/faqs' element= {<Faqs />} />      

    </Routes>
   </Router>
  );
}

export default App;
