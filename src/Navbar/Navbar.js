import './Navbar.css';
import { Link, useResolvedPath, useMatch } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/projects">Projects</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} className='navigation'>{children}</Link>
    </li>
  )
}
