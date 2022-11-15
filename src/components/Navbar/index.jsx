import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line object-curly-newline
import { faMagnifyingGlass, faBars, faSun, faBell } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <a href="http://localhost:3000/" className="logo__link">
        <img src={logo} alt="Nuron-logo" className="navbar__logo" />
      </a>
      <div className="menu__container">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="http://localhost:3000/" className="menu__link">Home</a>
            </li>
            <li className="menu__item">
              <a href="http://localhost:3000/" className="menu__link">About</a>
            </li>
            <li className="menu__item">
              <a href="http://localhost:3000/" className="menu__link">Explore</a>
            </li>
            <li className="menu__item">
              <a href="http://localhost:3000/" className="menu__link">Pages</a>
            </li>
            <li className="menu__item">
              <a href="http://localhost:3000/" className="menu__link">Blog</a>
            </li>
            <li className="menu__item">
              <a href="http://localhost:3000/" className="menu__link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="buttons__container">
        <form className="menu__form">
          <input className="menu__input" />
          <button type="button" className="menu__button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <button type="button" className="menu__button--color">Wallet connect</button>
        <button type="button" className="menu__button">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button type="button" className="menu__button button__bars">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button type="button" className="menu__button">
          <FontAwesomeIcon icon={faSun} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
