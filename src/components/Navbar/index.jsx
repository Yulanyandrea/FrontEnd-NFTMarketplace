import './styles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line object-curly-newline
import { faMagnifyingGlass, faBars, faSun, faBell } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="logo__link">
        <img src={logo} alt="Nuron-logo" className="navbar__logo" />
      </Link>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/" className="menu__link">Home</Link>
          </li>
          <li className="menu__item">
            <Link to="/login" className="menu__link">Login</Link>
          </li>
          <li className="menu__item">
            <Link to="/register" className="menu__link">Register</Link>
          </li>
          <li className="menu__item">
            <Link to="/createnft" className="menu__link">Create</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Blog</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="buttons__container">
        <form className="menu__form">
          <input type="text" className="menu__input" />
          <button type="button" className="menu__button button__search">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ACACAC' }} />
          </button>
        </form>
        <button type="button" className="menu__button--color">Wallet connect</button>
        <button type="button" className="menu__button">
          <FontAwesomeIcon icon={faBell} style={{ color: '#ACACAC' }} />
        </button>
        <button type="button" className="menu__button button__bars">
          <FontAwesomeIcon icon={faBars} style={{ color: '#ACACAC' }} />
        </button>
        <button type="button" className="menu__button">
          <FontAwesomeIcon icon={faSun} style={{ color: '#ACACAC' }} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
