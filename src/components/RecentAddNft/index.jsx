import './styless.scss';

// eslint-disable-next-line react/prop-types
const RecentAddNft = ({ nft = {} }) => {
  const {
    images,
    name,
    price,
    state,
  } = nft;

  return (
    <main className="recentNft">
      <section className="recentNft-content">
        <div className="recentNft-content_card">
          <div className="recentNft-content_card_avatar">
            <img className="recentNft-content_card_avatar-img" alt="avatar" src={images} />
          </div>
          <div className="recentNft-content_card_info">
            <h3 className="recentNft-content_card_info_title">{name}</h3>
            <p className="recentNft-content_card_info_bid">{state}</p>
            <p className="recentNft-content_card_info_price">{price}wETH</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecentAddNft;
