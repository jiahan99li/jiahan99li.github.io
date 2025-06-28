import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import SocialMedia from '../pages/Projects/pages/socialmedia/SocialMedia';
import Wiss from '../pages/Projects/pages/wiss/Wiss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/socialmedia' element={<SocialMedia />} />
        <Route path='/wiss' element={<Wiss />} />
      </Routes>
    </div>
  );
}

export default App;
