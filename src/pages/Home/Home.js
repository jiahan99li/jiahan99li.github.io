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
          <p>As a Solution Analyst at Deloitte, I developed solutions across mobile applications and the Salesforce platform.</p>
        </div>
        <div className='descriptionRight'>
          <p>Experienced professionally and on personal level with Flutter, React, HTML, CSS, PHP and more.</p>
        </div>
      </div>
      <div className='homeSocials'>
        <a className='socialsContainer' href='https://www.instagram.com/vinnylijiang/' target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt='Instagram'></img>
          <p>Instagram</p>
        </a>
        <a className='socialsContainer' href='https://github.com/jiahan99li' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='GitHub'></img>
          <p>GitHub</p>
        </a>
        <a className='socialsContainer' href='https://www.linkedin.com/in/jiahan-li-jiang-304b23179/' target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='Linkedin'></img>
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  );
}

export default Home;
