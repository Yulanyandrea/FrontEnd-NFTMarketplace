import './style.scss';
import uploadFile from './images/uploadfile.jpg';

const CreateNFT = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="createnft-form">
      <div>
        <p className="createnft-form__title">Estas en la pagina de Create NFT</p>
        <p className="createnft-form__description">Drag or choose your file yo upload</p>
      </div>
      <div>
        <img className="createnft-form__img-uploadfile" src={uploadFile} alt="UploadFile" />
      </div>
      <div className="createnft-form__product">
        <div className="createnft-form__product-name">
          <label htmlFor="product-name">Product Name</label>
          <input placeholder="e.g. `Digital Awesome Game`" />
        </div>
        <div className="createnft-form__product-description">
          <label htmlFor="product-name">Description</label>
          <input placeholder="e.g. 'After purshasing the product you can get time...'" />
        </div>
        <div className="createnft-form__product-price">
          <label htmlFor="product-name">Item Price in $</label>
          <input placeholder="e.g. `$20`" />
        </div>
        <div className="createnft-form__product-size">
          <label htmlFor="product-name">Size</label>
          <input placeholder="e.g. `Size`" />
        </div>
        <div className="createnft-form__product-propertie">
          <label htmlFor="product-name">Propertie</label>
          <input placeholder="e.g. `Propertie`" />
        </div>
        <div className="createnft-form__product-royality">
          <label htmlFor="product-name">Royality</label>
          <input placeholder="e.g. `20%`" />
        </div>
        <div className="createnft-form__checklist">
          <div className="createnft-form__checklist-sale">
            <input className="checkbox" type="checkbox" />
            <span>Put on Sale</span>
          </div>
          <div className="createnft-form__checklist-saleprice">
            <input className="checkbox" type="checkbox" />
            <span>Instant Sale Price</span>
          </div>
          <div className="createnft-form__checklist-unlock">
            <input className="checkbox" type="checkbox" />
            <span>Unlock Purchased</span>
          </div>
        </div>
        <button type="button" className="basic" onClick={handleSubmit}>
          Log in
        </button>
        <button type="button" className="basic" onClick={handleSubmit}>
          Log in
        </button>
      </div>
    </form>
  );
};

export default CreateNFT;
