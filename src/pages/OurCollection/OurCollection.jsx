/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './style.scss';
import TopCollection from '../../components/TopCollection/index';
import { getCollection } from './Collection';

// eslint-disable-next-line react/prop-types
const Our = () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    const dataCollection = async () => {
      try {
        const pageCollection = await getCollection();
        setCollection(pageCollection);
        console.log(pageCollection);
      } catch (error) {
        console.error(error);
      }
    };
    dataCollection();
  }, []);

  return (
    <div className="bigbox">
      {
        // eslint-disable-next-line react/prop-types
        collection.map((data) => {
          // console.log(data);
          return (
            <TopCollection data={data} key={data.id} />
          );
        })
      }
    </div>
  );
};
export default Our;
