import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../feature/api/counterSlice';

import './style.scss';

const EditImage = () => {
  const user = useSelector((state) => state.nftMarketPlace.user?.profile);

  const background = 'https://source.unsplash.com/random/600x400';

  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    profilepicture: user?.profilepicture,
  });

  const dispatch = useDispatch();

  const handleChangeInput = ({ target }) => {
    const { files, id, value } = target;
    const fileImage = files[0];

    // eslint-disable-next-line no-console
    // console.log('🚀 ~ file: Upload.jsx:10 ~ handleChange ~ file', fileImage);

    setFile(fileImage);

    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'https://backend-nftmarketplace-production.up.railway.app/api/upload/file';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', file.name);

    const options = {
      method: 'POST',
      body: formData,
    };

    const response = await fetch(url, options);
    const data = await response.json();

    // console.log('data: ', data.url);

    dispatch(updateUser({
      ...form,
      profilepicture: data.url,
    }));
  };

  return (
    <main className="editimage">
      <section className="editimage-profile">
        <h3 className="editimage-profile_title">Change your profile picture</h3>
        <label htmlFor="profilepicture">
          <div className="editimage-profile_img">
            <input
              id="profilepicture"
              name="profilepicture"
              type="file"
              // value={form.profilepicture}
              onChange={handleChangeInput}
              accept="image/*"
              className="editimage-profile_img-upload_input"
            />
            <img className="editimage-profile_img_avatar" alt="profile_picture" src={user?.profilepicture} />
          </div>
        </label>
        <button className="editimage-profile_btn" type="button" onClick={handleSubmit}>Upload Profile</button>
      </section>
      <section className="editimage-cover">
        <h3 className="editimage-cover_title">Change your cover photo</h3>
        <div className="editimage-cover_img">
          <img className="editimage-cover_img_bg" alt="image_cover" src={background} />
        </div>
        <button className="editimage-cover_btn" type="button">Upload Cover</button>
      </section>
    </main>
  );
};

export default EditImage;
