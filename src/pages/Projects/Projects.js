import './Projects.css'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
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
            <p className="text-sm leading-relaxed mb-0">
              Social Media App developed using Flutter, featuring real-time chat and posts to share with friends.
            </p>
            <div className='mt-auto'>
              <CustomLink to="/socialmedia">Learn more</CustomLink>
            </div>
          </section>
          {/* Section 2 */}
          <section id="wissApp" className="h-[380px] py-8 px-10 rounded-md overflow-hidden flex flex-col flex-1">
            <h2 className="uppercase font-bold text-[28px] mb-8">
              Wiss App
            </h2>
            <p className="text-sm leading-relaxed mb-0">
              Cross Platform tools app released on Android and iOS, featuring unit exchange, calculator, and more.
            </p>
            <div className='mt-auto'>
              <CustomLink to="/wiss">Learn more</CustomLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Projects;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li style={{ listStyleType: 'none' }} className={isActive ? "active" : ""}>
      <Link to={to} {...props} style={{ color: "hsl(261 39.3% 43.9%)" }} className='w-fit px-6 py-3 bg-white rounded-full hover:ring-1 hover:!text-white hover:bg-inherit hover:ring-white transition-all learnmore'>{children}</Link>
    </li>
  )
}
