import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { Sun, Moon } from './Icons.jsx';

export default function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="nav" id="nav">
      <div className="container">
        <Link className="nav-brand" to="/">Mohit Bhandari</Link>
        <div className="nav-right">
          <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/" end>
            Home
          </NavLink>
          <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/projects">
            Projects
          </NavLink>
          <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/oss">
            OSS
          </NavLink>
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" title="Toggle theme">
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
