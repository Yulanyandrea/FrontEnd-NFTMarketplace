import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faBars,
  faSun,
  faBell,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import './styles.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function handleMenu() {
    setToggle(!toggle);
  }

  return (
    <header className="navbar__container">
      <Link to="/" className="logo__link">
        <img src={logo} alt="Nuron-logo" className="navbar__logo" />
      </Link>
      <nav className={toggle ? 'navbar__active' : 'navbar'}>
        <div className="logo__aside">
          <Link to="/" className="logo__link--hide">
            <img src={logo} alt="Nuron-logo" className="navbar__logo" />
          </Link>
          <button type="button" className="menu__button button__close" onClick={handleMenu}>
            <FontAwesomeIcon icon={faXmark} style={{ color: '#ACACAC' }} />
          </button>
        </div>
        <div className="menu">
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
              <Link to="/explore" className="menu__link">Explore</Link>
            </li>
            <li className="menu__item">
              <Link to="/ourcollection" className="menu__link">Our Collection</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="buttons__container">
        <form className="menu__form">
          <input type="text" placeholder="Search Here" className="menu__input" />
          <button type="button" className="menu__button button__search">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ACACAC' }} />
          </button>
        </form>
        <button type="button" className="menu__button--color">Wallet connect</button>
        <button type="button" className="menu__button">
          <FontAwesomeIcon icon={faBell} style={{ color: '#ACACAC' }} />
        </button>
        <button type="button" className="menu__button button__bars" onClick={handleMenu}>
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
