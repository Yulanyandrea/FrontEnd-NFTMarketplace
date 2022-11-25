import './style.scss';
// import {Link, useLocation } from 'react-router-dom';

const MenuNavigator = (props) => {
  // eslint-disable-next-line react/prop-types
  const { titleBar, nameRoute, namePage } = props;
  return (
    <div className="menuTop">
      <header className="menuTop__container">
        <h1 className="menuTop__title">{titleBar}</h1>
      </header>
      <section className="menuTop__container2">
        <p className="menuTop__route">{nameRoute}</p>
        <p className="menuTop__arrow">{'>'}</p>
        <p className="menuTop__page">{namePage}</p>
      </section>
    </div>
  );
};
export default MenuNavigator;
