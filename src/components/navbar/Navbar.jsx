import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeToggle from '../themetoggle/Themetoggle';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top border-bottom">
      <div className="container-fluid">
        <ThemeToggle />
        
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#apropos">
                À propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#competences">
                Compétences
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#parcours">
                Parcours
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projet">
                Projets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;