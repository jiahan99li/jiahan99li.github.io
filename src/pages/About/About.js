import './About.css';
import profile from '../../assets/profile.png';

function About() {
  return (
    <div className="About">
      <div className='aboutIntro'>
        <div className='introLeft'>
          <div className='introImageContainer'>
            <img src={profile} alt='Profile' onContextMenu="return false;" />
          </div>
        </div>
        <div className='introRight'>
          <h1>I'm Jiahan Vinny Li,</h1>
          <p>
            Since joining Deloitte as a Solution Analyst in Summer 2022, I have been engaged in developing and delivering solutions primarily within mobile (Native & Flutter) and web development domains. Capitalizing on my certification as a Salesforce Platform Developer I, I have successfully applied this expertise to contribute to Salesforce development projects, demonstrating adaptability and expanding my technical delivery scope.
          </p>
        </div>
      </div>
      <div className='skillsContainer'>
        <h1>Skills</h1>
        <div className='skillLevel100'>
          <p style={{ marginLeft: '3.5cqh' }}>HTML</p>
          <p style={{ marginRight: '3.5cqh' }}>5★</p>
        </div>
        <div className='skillLevel100'>
          <p style={{ marginLeft: '3.5cqh' }}>CSS</p>
          <p style={{ marginRight: '3.5cqh' }}>5★</p>
        </div>
        <div className='skillLevel100'>
          <p style={{ marginLeft: '3.5cqh' }}>Javascript</p>
          <p style={{ marginRight: '3.5cqh' }}>5★</p>
        </div>
        <div className='skillLevel100'>
          <p style={{ marginLeft: '3.5cqh' }}>Flutter (Dart)</p>
          <p style={{ marginRight: '3.5cqh' }}>5★</p>
        </div>
        <div className='skillLevel100'>
          <p style={{ marginLeft: '3.5cqh' }}>Microsoft Office</p>
          <p style={{ marginRight: '3.5cqh' }}>5★</p>
        </div>
        <div className='skillLevel100'>
          <p style={{ marginLeft: '3.5cqh' }}>Multilingual</p>
          <p style={{ marginRight: '3.5cqh' }}>5★</p>
        </div>
        <div className='skillLevel80'>
          <p style={{ marginLeft: '3.5cqh' }}>PHP</p>
          <p style={{ marginRight: '3.5cqh' }}>4★</p>
        </div>
        <div className='skillLevel80'>
          <p style={{ marginLeft: '3.5cqh' }}>MYSQL</p>
          <p style={{ marginRight: '3.5cqh' }}>4★</p>
        </div>
        <div className='skillLevel80'>
          <p style={{ marginLeft: '3.5cqh' }}>React JS</p>
          <p style={{ marginRight: '3.5cqh' }}>4★</p>
        </div>
        <div className='skillLevel80'>
          <p style={{ marginLeft: '3.5cqh' }}>Java</p>
          <p style={{ marginRight: '3.5cqh' }}>4★</p>
        </div>
        <div className='skillLevel60'>
          <p style={{ marginLeft: '3.5cqh' }}>Salesforce</p>
          <p style={{ marginRight: '3.5cqh' }}>3★</p>
        </div>
        <div className='skillLevel20'>
          <p style={{ marginLeft: '3.5cqh' }}>Python</p>
          <p style={{ marginRight: '3.5cqh' }}>1★</p>
        </div>
      </div>
      <div className='moreAbout'>
        <h1>A little more about me...</h1>
        <p>
          With the rapid advancements on AI and technologies as a whole. I am looking forward to learning and getting more certifications whether it's in Salesforce,
          AI or anything related to development.
        </p>
      </div>
    </div>
  );
}

export default About;
