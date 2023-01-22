import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import {
  faMagnifyingGlass,
  faBars,
  faCartShopping,
  faBell,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

import './styles.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const user = useSelector((state) => state.nftMarketPlace.user?.profile);
  const itemBuy = useSelector((state) => state.nftMarketPlace?.shoppingCart);

  const navigate = useNavigate();

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
            {!user
              ? (
                <li className="menu__item">
                  <Link to="/login" className="menu__link">Login</Link>
                </li>
              ) : (
                <li className="menu__item">
                  <Link to="/profile" className="menu__link">Profile</Link>
                </li>
              )}
            {!user
              ? (
                <li className="menu__item">
                  <Link to="/register" className="menu__link">Register</Link>
                </li>
              ) : null }
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
        {user?.role === 'ADMIN' ? (
          <div className="userRegistered">
            <button className="userRegistered-btn" type="button" onClick={() => navigate('/userdata_base')}>User registered</button>
          </div>
        ) : null}
        <button type="button" className="menu__button">
          <FontAwesomeIcon icon={faBell} style={{ color: '#ACACAC' }} />
        </button>
        <button type="button" className="menu__button button__bars" onClick={handleMenu}>
          <FontAwesomeIcon icon={faBars} style={{ color: '#ACACAC' }} />
        </button>
        <button type="button" className="menu__button">
          <Link to="/checkout" className="menu__link">
            <FontAwesomeIcon className="menu__link-icon" icon={faCartShopping} style={itemBuy.length > 0 ? { color: '#00A3FF' } : null} />
            {itemBuy.length > 0 ? <p className="menu__link-items">{itemBuy.length}</p> : null }
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
