import './Projects.css'
import React from "react"

function Projects() {
  const purple = "hsl(261 39.3% 43.9%)";
  return (
    <div className="Projects">
      <div className="project-container">
        <div className="project-title-container">
          <h2 className='text-[45px]'>Projects</h2>
        </div>
        <div className="grid gap-8 content-center lg:grid-cols-3 md:grid-cols-2 flex justify-evenly card-section">
          {/* Section 1 */}
          <section id="socialMediaApp" className="h-[380px] py-8 px-10 rounded-md overflow-hidden flex flex-col">
            <h2 className="uppercase font-bold text-[28px] mb-8">
              Social Media App
            </h2>
            <p className="text-sm leading-relaxed mb-12">
              Social Media App developed using Flutter, featuring real-time chat and posts to share with friends.
            </p>
            <a style={{ color: purple }} href="/socialmedia" className="w-fit px-6 py-3 bg-white rounded-full hover:ring-1 hover:!text-white hover:bg-inherit hover:ring-white transition-all mt-auto learnmore">Learn more</a>
          </section>
          {/* Section 2 */}
          <section id="wissApp" className="h-[380px] py-8 px-10 rounded-md overflow-hidden flex flex-col">
            <h2 className="uppercase font-bold text-[28px] mb-8">
              Wiss App
            </h2>
            <p className="text-sm leading-relaxed mb-12">
              Cross Platform tools app released on Android and iOS, featuring unit exchange, calculator, and more.
            </p>
            <a style={{ color: purple }} href="/wiss" className="w-fit px-6 py-3 bg-white rounded-full hover:ring-1 hover:!text-white hover:bg-inherit hover:ring-white transition-all mt-auto learnmore">Learn more</a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Projects;
