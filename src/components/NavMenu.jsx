import { Link, useLocation } from 'react-router-dom';

// obj destructuring - each prop obj var gets var name
function NavMenu() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          AboutMe
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/MyResume"
          className={currentPage === '/MyResume' ? 'nav-link active' : 'nav-link'}
        >
          MyResume
        </Link>
      </li>
    </ul>
  );
}

export default NavMenu;
