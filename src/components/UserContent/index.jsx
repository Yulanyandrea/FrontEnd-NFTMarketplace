import { useState } from 'react';
import { useSelector } from 'react-redux';
import NftCard from '../NftCard';

import './styless.scss';

const UserContent = () => {
  const [select, setSelect] = useState(null);

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
  const filterLiked = [];

  return (
    <div className="content">
      <div className="usercontent">
        <div className="usercontent-navbar">
          <button
            className="usercontent-navbar_btn"
            type="button"
            onClick={() => setSelect(filterOnSale)}
          >
            On Sale
          </button>
          <button
            className="usercontent-navbar_btn"
            type="button"
            onClick={() => setSelect(filterOwned)}
          >
            Owned
          </button>
          <button
            className="usercontent-navbar_btn"
            type="button"
            onClick={() => setSelect(filterCreatedBy)}
          >
            Created
          </button>
          <button
            className="usercontent-navbar_btn"
            type="button"
            onClick={() => setSelect(filterLiked)}
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
