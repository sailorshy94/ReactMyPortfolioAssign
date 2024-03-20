import { Link, useLocation } from 'react-router-dom';

// obj destructuring - each prop obj var gets var name
function NavMenu() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/AboutMe"
          className={currentPage === '/' ? 'nav-link contrast' : 'nav-link'}
        >
          AboutMe
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link contrast' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link contrast' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/MyResume"
          className={currentPage === '/MyResume' ? 'nav-link contrast' : 'nav-link'}
        >
          MyResume
        </Link>
      </li>
    </ul>
  );
}

export default NavMenu;
