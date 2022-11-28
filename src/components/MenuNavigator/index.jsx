import './style.scss';
// import {Link, useLocation } from 'react-router-dom';

const MenuNavigator = (props) => {
  const url = window.location.pathname;
  const name = url.slice(1);
  // eslint-disable-next-line react/prop-types
  const { nameRoute } = props;
  return (
    <div className="menuTop">
      <header className="menuTop__container">
        <h1 className="menuTop__title">{name}</h1>
      </header>
      <section className="menuTop__container2">
        <p className="menuTop__route">{nameRoute}</p>
        <p className="menuTop__arrow">{'>'}</p>
        <p className="menuTop__page">{name}</p>
      </section>
    </div>
  );
};
export default MenuNavigator;
