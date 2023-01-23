import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ExploreProduct from '../../components/ExploreProduct';
import NftCard from '../../components/NftCard';

import './styless.scss';

const Explore = () => {
  const data = useSelector((state) => state.nftMarketPlace?.data);

  const [newData, setNewData] = useState(data);

  const filterValue = useSelector((state) => state.nftMarketPlace?.selectFilter);
  const filterState = (element) => filterValue?.state?.includes(element.state);
  const filterCategories = (element) => filterValue?.categories?.includes(element.categories);
  const filterPrice = (element) => element.price <= filterValue?.price;

  const filterData = () => {
    if (filterValue !== null) {
      setNewData(data.filter(filterState).filter(filterCategories).filter(filterPrice));
    }
    return newData;
  };

  useEffect(() => {
    filterData();
  }, [data, filterValue]);

  // eslint-disable-next-line no-console
  // console.log('filter Data: ', data.filter(filterPrice));

  return (
    <main className="explorer">
      <section className="explorer-filter">
        <ExploreProduct />
      </section>
      <section className="explorer-nft">
        {newData?.map((nft) => (
          <NftCard product={nft} />
        ))}
      </section>
    </main>
  );
};

export default Explore;
