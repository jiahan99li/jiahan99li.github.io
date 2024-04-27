import './Home.css';
import { useNavigate } from 'react-router-dom';
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

function Home() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `https://www.google.com`;
    navigate(path);
  }

  return (
    <div className="Home">
      <h1>Hey!I'm Jiahan</h1>
      <h2>Software Developer & Salesforce Developer</h2>
      <div className="homeDescription">
        <div className='descriptionLeft'>
          <p>Currently a Solution Analyst working on mobile app and salesforce development at Deloitte.</p>
        </div>
        <div className='descriptionRight'>
          <p>Experienced in either professional or personal level on Flutter, React, HTML, CSS, PHP and more.</p>
        </div>
      </div>
      <div className='homeSocials'>
        <a className='socialsContainer' href='https://www.google.com'>
          <img src={instagram}></img>
          <p>Instagram</p>
        </a>
        <a className='socialsContainer' href='https://github.com/jiahan99li'>
          <img src={github}></img>
          <p>GitHub</p>
        </a>
        <a className='socialsContainer' href='https://www.google.com'>
          <img src={linkedin}></img>
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  );
}

export default Home;
