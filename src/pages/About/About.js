import './About.css';
import profile from '../../assets/profile.png';

function About() {
  return (
    <div className="About">
      <div className='aboutIntro'>
        <div className='introLeft'>
          <div className='introImageContainer'>
            <img src={profile} alt='Profile' />
          </div>
        </div>
        <div className='introRight'>
          <h1>About</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
