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
          <p style={{ marginLeft: '3.5cqh' }}>React</p>
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
          Passionate Software Engineer with 3+ years of experience in full-stack web and cross-platform mobile development, specializing in building scalable, user-focused applications. Prior to Deloitte, I worked as a Full-Stack Developer, architecting and deploying React-based web solutions that optimized performance and user engagement across diverse client projects. Beyond my professional work, I independently designed and developed additional mobile applications and multiple React websites for friends and family, refining my skills in end-to-end development, responsive design, and agile problem-solving. At Deloitte, I engineered critical features for a state health insurance marketplace Flutter app, collaborating with cross-functional teams to deliver seamless user experiences. Independently, I also designed, developed, and launched a social media app with Flutter, featuring real-time chat and custom UI animations.
          <br /><br />Recognizing growing demand for Salesforce expertise within Deloitte projects, I rapidly upskilled, achieved certification, and successfully transitioned to contribute to critical Salesforce implementations—demonstrating strong adaptability and a commitment to accelerated learning.
        </p>
      </div>
    </div>
  );
}

export default About;
