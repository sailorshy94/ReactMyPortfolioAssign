import { Link, useLocation } from 'react-router-dom';

// obj destructuring - each prop obj var gets var name
function NavMenu() {
  const currentPage = useLocation().pathname;

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      fontSize: '27.5px'
    }}>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link contrast' : 'nav-link'}
            >
              About
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
            Resume
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NavMenu;
