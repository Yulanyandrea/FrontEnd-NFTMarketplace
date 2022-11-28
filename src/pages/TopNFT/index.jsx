import './style.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { getData } from '../../hook/TopNft';

const TopNft = () => {
  const [top, setTop] = useState([]);
  useEffect(() => {
    const dataTop = async () => {
      try {
        const pageTop = await getData();
        setTop(pageTop);
      } catch (error) {
        console.error(error);
      }
    };
    dataTop();
  }, []);

  return (
    <div className="TopNFT">
      <section className="TopNFT__title">
        <FontAwesomeIcon icon={faSuitcase} style={{ color: 'white' }} className="fa-solid fa-coffee fa-2x" />
        <h1 className="TopNFT__text">The top NFT on Nuron</h1>
      </section>
      <section className="TopNFT__container">
        <table className="TopNFT__tab">
          <thead>
            <tr className="TopNFT__TabHead">
              <th className="TopNFT__tablehead">SL</th>
              <th className="TopNFT__tableheadProduct">Product</th>
              <th className="TopNFT__tablehead">Volume</th>
              <th className="TopNFT__tablehead">24h%</th>
              <th className="TopNFT__tablehead">7d%</th>
              <th className="TopNFT__tablehead">Floor Price</th>
              <th className="TopNFT__tablehead">Owners</th>
              <th className="TopNFT__tablehead">items</th>
            </tr>
          </thead>
          <tbody>
            {
            top.map((info) => {
              return (
                <tr className="TopNFT__tableContent">
                  <td className="TopNFT__tableDescription">{info.id} .</td>
                  <td className="TopNFT__tableDescriptionImage"><img src={info.name} alt="imagen" className="TopNFT__tableDescriptionImage-width" /> Secure 25</td>
                  <td className="TopNFT__tableDescription">{info.type}</td>
                  <td className="TopNFT__tableDescription">{info.percent}</td>
                  <td className="TopNFT__tableDescription">{info.percent2}</td>
                  <td className="TopNFT__tableDescription">{info.price}</td>
                  <td className="TopNFT__tableDescription">{info.owner}</td>
                  <td className="TopNFT__tableDescription">{info.items}</td>
                </tr>
              );
            })
          }

          </tbody>
        </table>
      </section>
    </div>
  );
};
export default TopNft;
