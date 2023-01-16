import { useState } from 'react';
import { useSelector } from 'react-redux';
import NftCard from '../NftCard';

import './styless.scss';

const UserContent = () => {
  const [select, setSelect] = useState(null);
  const [active, setActive] = useState(null);

  const allProducts = useSelector((state) => state.nftMarketPlace?.data);

  const filterOnSale = allProducts.filter(
    (nft) => (nft.state === 'ONSALE' && nft.createdBy === '63beb4859f59b1f1d3445c61'),
  );
  const filterCreatedBy = allProducts.filter(
    (nft) => nft.createdBy === '63beb4859f59b1f1d3445c61',
  );
  const filterOwned = allProducts.filter(
    (nft) => nft.owner === '63beb4859f59b1f1d3445c61',
  );
  const filterLiked = allProducts.filter(
    (nft) => nft.likes.includes('63beb4859f59b1f1d3445c61'),
  );

  return (
    <div className="content">
      <div className="usercontent">
        <div className="usercontent-navbar">
          <button
            className="usercontent-navbar_btn"
            name="onsale"
            type="button"
            onClick={(event) => {
              setSelect(filterOnSale); setActive(event.target.name);
            }}
            style={active === 'onsale' ? { background: '#00A3FF', border: 'none' } : null}
          >
            On Sale
          </button>
          <button
            className="usercontent-navbar_btn"
            name="owned"
            type="button"
            onClick={(event) => {
              setSelect(filterOwned);
              setActive(event.target.name);
            }}
            style={active === 'owned' ? { background: '#00A3FF', border: 'none' } : null}
          >
            Owned
          </button>
          <button
            className="usercontent-navbar_btn"
            name="create"
            type="button"
            onClick={(event) => {
              setSelect(filterCreatedBy);
              setActive(event.target.name);
            }}
            style={active === 'create' ? { background: '#00A3FF', border: 'none' } : null}
          >
            Created
          </button>
          <button
            className="usercontent-navbar_btn"
            name="like"
            type="button"
            onClick={(event) => {
              setSelect(filterLiked);
              setActive(event.target.name);
            }}
            style={active === 'like' ? { background: '#00A3FF', border: 'none' } : null}
          >
            Liked
          </button>
        </div>
        <div className="usercontent-content">
          <div className="usercontent-content_created">
            {allProducts
              ? select?.map((product) => (
                <NftCard product={product} key={product._id} />
              ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
