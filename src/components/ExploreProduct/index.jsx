import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setNftFilter } from '../../feature/api/counterSlice';

import './styles.scss';

const ExploreProduct = () => {
  const [filter, setFilter] = useState({
    price: 500,
    categories: '',
    state: '',
  });

  const dispatch = useDispatch();

  const dataCategory = useSelector((state) => state.nftMarketPlace.data);
  const dataMap = dataCategory.flatMap((element) => element.categories);
  const dataSet = new Set(dataMap);
  const categories = [...dataSet];

  const handleChange = (id) => {
    setFilter({ ...filter, [id.target.id]: id.target.value });
  };

  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  const onClick = (event) => {
    event.preventDefault();
    dispatch(setNftFilter(filter));
  };

  // eslint-disable-next-line no-console
  // console.log('filter: ', typeof +filter.price);

  return (
    <main className="explore__container">
      <div className="explore__header">
        <h1 className="explore__title">explore product</h1>
        <button type="button" className={toggle ? 'button__header--color' : 'button__header'} onClick={handleToggle}>filter
          {toggle ? <FontAwesomeIcon icon={faXmark} style={{ color: '#FFFFFF' }} /> : <FontAwesomeIcon icon={faFilter} style={{ color: '#FFFFFF' }} />}
        </button>
      </div>
      <form
        className={toggle ? 'explore__form--active' : 'explore__form'}
        onChange={handleChange}
        onSubmit={onClick}
      >
        <label className="explore__label">
          <span>Price: <span className="explore__label_price">{filter.price}wETH</span></span>
          <input type="range" id="price" min="0" max="1000" value={filter.price} step="1" className="explore__select" />
        </label>
        <label className="explore__label">
          <span>category</span>
          <select className="explore__select" id="categories">
            <option id="categories"> </option>
            {categories?.map((cat) => (
              <option key={cat} id="categories" value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <label className="explore__label">
          <span>State</span>
          <select className="explore__select" id="state">
            <option> </option>
            <option id="state" value="ONSALE">on Sale</option>
            <option id="state" value="NOTFORSALE">not for Sale</option>
          </select>
        </label>
        <button type="submit" className="button__filter">filter</button>
      </form>
    </main>
  );
};

export default ExploreProduct;
