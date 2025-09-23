import logo from './logo.svg';
import './App.css';
import Home  from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './pages/service/service';
import Experience from './pages/experience/experience';



function App() {
  return (
<Router>
     
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/service' element= {<Service />} />
      <Route path='/experience' element= {<Experience />} />


    </Routes>
   </Router>
  );
}

export default App;
