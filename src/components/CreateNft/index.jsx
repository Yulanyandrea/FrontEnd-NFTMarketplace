import { useMediaQuery } from 'react-responsive';
// import MediaQuery from 'react-responsive';
import './style.scss';
import uploadFile from './images/uploadfile.jpg';

const CreateNFT = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const hiddenDesktop = useMediaQuery({
    query: '(max-width: 1439px)',
  });

  const hiddenMobile = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  return (
    <form className="createnft-form">
      <div className="createnft-form__section">
        <p className="createnft-form__title">Upload file</p>
        <p className="createnft-form__description">
          Drag or choose your file yo upload
        </p>
        <img
          className="createnft-form__img-uploadfile"
          src={uploadFile}
          alt="UploadFile"
        />
        {hiddenMobile && (
        <div className="createnft-form__note">
          <p className="createnft-form__note-title">Note:</p>
          <p className="createnft-form__note-description">
            Service fee: <span>2.5%</span>
          </p>
          <p className="createnft-form__note-description">
            You will receive: <span>25.00 ETH $50,000</span>
          </p>
        </div>
        )}
      </div>
      <div className="createnft-form__product">
        <div className="createnft-form__product-name">
          <label htmlFor="product-name">Product Name</label>
          <input placeholder="e.g. `Digital Awesome Game`" />
        </div>
        <div className="createnft-form__product-description">
          <label htmlFor="product-name">Description</label>
          <textarea
            type="text"
            placeholder="e.g. 'After purshasing the product you can get time...'"
          />
        </div>
        <div className="createnft-form__product-viewDesktop">
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
        <div className="createnft-form__buttons">
          <button type="button" className="button_preview" onClick={handleSubmit}>
            Preview
          </button>
          <button
            type="button"
            className="button_submititem"
            onClick={handleSubmit}
          >
            Submit Item
          </button>
        </div>
      </div>
      {hiddenDesktop && (
        <div className="createnft-form__note">
          <p className="createnft-form__note-title">Note:</p>
          <p className="createnft-form__note-description">
            Service fee: <span>2.5%</span>
          </p>
          <p className="createnft-form__note-description">
            You will receive: <span>25.00 ETH $50,000</span>
          </p>
        </div>
      )}
    </form>
  );
};

export default CreateNFT;
