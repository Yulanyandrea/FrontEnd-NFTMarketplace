// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
// import avatar from '../../assets/image-avatar.png';
// import './styles.scss';

// // eslint-disable-next-line react/prop-types
// const NftCard = ({ product = {} }) => {
//   const {
//     image,
//     name,
//     price,
//     bit,
//     bid,
//     likes,
//   } = product;

//   return (
//     <section className="card">
//       <Link to={`/productdetail/${product.id}`} className="card__link">
//         <img src={image} alt="NFT" className="card__image" />
//       </Link>
//       <div className="card__body">
//         <section className="card__biders">
//           <div className="avatar__container">
//             <img src={avatar} alt="avatar" className="card__avatar" />
//             <img src={avatar} alt="avatar" className="card__avatar" />
//             <img src={avatar} alt="avatar" className="card__avatar" />
//             <h4 className="avatar__text">{bit} Place Bit.</h4>
//           </div>
//           <button className="card__button" type="button">...</button>
//         </section>
//         <div className="card__info">
//           <h2 className="card__title--color">{name}</h2>
//           <h3 className="card__subtitle">Highest bid {bid}</h3>
//           <div className="card__stats">
//             <h4 className="nft__price">{price}wETH</h4>
//             <div className="card__like">
//               <FontAwesomeIcon icon={farHeart} />
//               <h4 className="card__totalikes">{likes}</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NftCard;
