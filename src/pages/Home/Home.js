import './Home.css';
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

function Home() {

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
        <a className='socialsContainer' href='https://www.instagram.com/vinnylijiang/'>
          <img src={instagram} alt='Instagram'></img>
          <p>Instagram</p>
        </a>
        <a className='socialsContainer' href='https://github.com/jiahan99li'>
          <img src={github} alt='GitHub'></img>
          <p>GitHub</p>
        </a>
        <a className='socialsContainer' href='https://www.linkedin.com/in/jiahan-li-jiang-304b23179/'>
          <img src={linkedin} alt='Linkedin'></img>
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  );
}

export default Home;
