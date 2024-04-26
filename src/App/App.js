import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/about":
      Component = About
      break
    case "/projects":
      Component = Projects
      break
    case "/contact":
      Component = Contact
      break
  }
  return (
    <div className="App glass">
      <Navbar />
      <Component />
    </div>
  );
}

export default App;
