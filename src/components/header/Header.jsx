import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../title/Title.jsx';

const Header = () => {
  return (
    <header className="header p-3 bg-light border-bottom shadow-sm">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <img
        
          src={`${import.meta.env.BASE_URL}image/logothomas.png`}
          alt="Logo de mon portfolio"
          className="header-logo"
        />

        <div className="flex-grow-1 text-center">
          <Title />
        </div>

       
        <div className="header-logo-placeholder" style={{ width: '50px' }}></div>
      </div>
    </header>
  );
};

export default Header;