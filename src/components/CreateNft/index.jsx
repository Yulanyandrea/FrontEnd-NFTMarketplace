import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { createNft } from '../../hook/create';
import uploadFile from './images/uploadfile.jpg';
import './style.scss';

const CreateNFT = () => {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);

  const [form, setForm] = useState({
    id: '',
    owner: 'unknown',
    image: img,
    name: '',
    description: '',
    price: '',
    size: '',
    propertie: '',
    royalty: '',
  });

  const handleChangeInput = ({ target }) => {
    const { files } = target;
    // eslint-disable-next-line no-shadow
    const fileImage = files[0];
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: Upload.jsx:10 ~ handleChange ~ file', fileImage);
    setFile(fileImage);
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
    setFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const url = 'http://localhost:8080/api/upload/file';
    // console.log(file);

    formData.append('file', file);
    formData.append('filename', file.name);

    const options = {
      method: 'POST',
      body: formData,
    };

    const response = await fetch(url, options);
    const data = await response.json();
    setImg(data.url);

    try {
      await createNft({
        ...form,
        image: data.url,
        createdBy: '63940e92dc2a7b3f2380eb3e',
      });
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };
  // console.log(form);

  const hiddenDesktop = useMediaQuery({
    query: '(max-width: 1439px)',
  });

  const hiddenMobile = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  return (
    <form className="createnft-form" onSubmit={handleSubmit}>
      <div className="createnft-form__section">
        <p className="createnft-form__title">Upload file</p>
        <p className="createnft-form__description">
          Drag or choose your file yo upload
        </p>
        <label
          htmlFor="file"
          className="createnft-form__img"
        >
          <div className="createnft-form__img-upload">
            <FontAwesomeIcon
              icon={faUpload}
              className="createnft-form__img-upload_icon"
            />
            <input
              id="file"
              name="file"
              type="file"
              onChange={handleChangeInput}
              accept="image/*"
              className="createnft-form__img-upload_input"
            />
            <h3 className="createnft-form__img-upload_title">Choose a File</h3>
            <p className="createnft-form__img-upload_description">
              PNG, GIF, WEBP, MP4 OR MP3, Max 1Gb.
            </p>
          </div>
          {img ? (
            <img
              className="createnft-form__img-uploadfile"
              src={img}
              alt="UploadFile"
            />
          ) : (
            <img
              className="createnft-form__img-uploadfile"
              src={uploadFile}
              alt="img"
            />
          )}
        </label>
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
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. `Digital Awesome Game`"
          />
        </div>
        <div className="createnft-form__product-description">
          <label htmlFor="product-name">Description</label>
          <textarea
            id="description"
            type="text"
            value={form.description}
            onChange={handleChange}
            placeholder="e.g. 'After purshasing the product you can get time...'"
          />
        </div>
        <div className="createnft-form__product-viewDesktop">
          <div className="createnft-form__product-price">
            <label htmlFor="product-name">Item Price in $</label>
            <input
              id="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g. `$20`"
            />
          </div>
          <div className="createnft-form__product-size">
            <label htmlFor="product-name">Size</label>
            <input
              id="size"
              value={form.size}
              onChange={handleChange}
              placeholder="e.g. `Size`"
            />
          </div>
          <div className="createnft-form__product-propertie">
            <label htmlFor="product-name">Propertie</label>
            <input
              id="propertie"
              value={form.propertie}
              onChange={handleChange}
              placeholder="e.g. `Propertie`"
            />
          </div>
        </div>
        <div className="createnft-form__product-royality">
          <label htmlFor="product-name">Royality</label>
          <input
            id="royalty"
            value={form.royalty}
            onChange={handleChange}
            placeholder="e.g. `20%`"
          />
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
          <button type="submit" className="button_preview" value="preview">
            Preview
          </button>
          <button type="submit" value="submit" className="button_submititem">
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
