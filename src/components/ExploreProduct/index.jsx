import './styles.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';

const ExploreProduct = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="explore__container">
      <div className="explore__header">
        <h1 className="explore__title">explore product</h1>
        <button type="button" className={toggle ? 'button__header--color' : 'button__header'} onClick={handleToggle}>filter
          {toggle ? <FontAwesomeIcon icon={faXmark} style={{ color: '#FFFFFF' }} /> : <FontAwesomeIcon icon={faFilter} style={{ color: '#FFFFFF' }} />}
        </button>
      </div>
      <form className={toggle ? 'explore__form--active' : 'explore__form'}>
        <label className="explore__label">
          <span>likes</span>
          <select className="explore__select">
            <option>most liked</option>
            <option>least liked</option>
          </select>
        </label>
        <label className="explore__label">
          <span>category</span>
          <select className="explore__select">
            <option>category</option>
          </select>
        </label>
        <label className="explore__label">
          <span>collections</span>
          <select className="explore__select">
            <option>collections</option>
          </select>
        </label>
        <label className="explore__label">
          <span>sale type</span>
          <select className="explore__select">
            <option>on bid</option>
            <option>instant sale</option>
          </select>
        </label>
        <button type="submit" className="button__filter">filter</button>
      </form>
    </div>
  );
};

export default ExploreProduct;
