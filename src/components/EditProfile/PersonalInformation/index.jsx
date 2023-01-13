import { useState } from 'react';
import { useSelector } from 'react-redux';
import { UpdateUser } from '../../../feature/api/counterApi';

import './style.scss';

const PersonalInformation = () => {
  const user = useSelector((state) => state.nftMarketPlace.user?.profile);
  const idUser = useSelector((state) => state.nftMarketPlace.user?.profile._id);

  const [form, setForm] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    Bio: '',
    role: user.role,
    gender: '',
    currency: user.currency,
    phone: '',
    location: '',
    address: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await UpdateUser(form, idUser);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  return (
    <main className="editprofile">
      <form className="editprofile-content" onSubmit={handleSubmit}>
        <section className="editprofile-content_name">
          <div className="editprofile-content_name-first">
            <p>First Name</p>
            <input
              className="editprofile-content_name-first_input"
              type="text"
              id="firstname"
              value={form.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="editprofile-content_name-last">
            <p>last Name</p>
            <input
              type="text"
              className="editprofile-content_name-last_input"
              id="lastname"
              value={form.lastname}
              onChange={handleChange}
            />
          </div>
        </section>
        <div className="editprofile-content_email">
          <p>Edit Your Email</p>
          <input
            type="text"
            className="editprofile-content_email_input"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="editprofile-content_bio">
          <p>Edit Your Bio</p>
          <input
            type="text"
            className="editprofile-content_bio_input"
            id="Bio"
            value={form.Bio}
            onChange={handleChange}
          />
        </div>
        <section className="editprofile-content_role">
          <div className="editprofile-content_role_edit">
            <p>Your Role</p>
            <input
              type="text"
              className="editprofile-content_role_edit_input"
              id="role"
              value={form.role}
              onChange={handleChange}
            />
          </div>
          <div className="editprofile-content_role_gender">
            <input
              className="editprofile-content_role_gender_input"
              placeholder="Select Your Gender"
              id="gender"
              value={form.gender}
              onChange={handleChange}
            />
          </div>
        </section>
        <section className="editprofile-content_candp">
          <div className="editprofile-content_candp_currency">
            <input
              className="editprofile-content_candp_currency_input"
              placeholder="Currency"
              id="currency"
              value={form.currency}
              onChange={handleChange}
            />
          </div>
          <div className="editprofile-content_candp_phone">
            <p>Phone Number</p>
            <input
              type="number"
              className="editprofile-content_candp_phone_input"
              id="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </section>
        <section className="editprofile-content_landa">
          <div className="editprofile-content_landa_location">
            <input
              type="text"
              className="editprofile-content_landa_location_input"
              placeholder="Location"
              id="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>
          <div className="editprofile-content_landa_address">
            <p>Address</p>
            <input
              type="text"
              className="editprofile-content_landa_address_input"
              id="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>
        </section>
        <section className="editprofile-content-button">
          <button
            className="editprofile-content-button_cancel"
            type="button"
            // onClick={() => form.reset()}
          >
            Cancel
          </button>
          <button
            className="editprofile-content-button_submit"
            type="submit"
            value="submit"
          >
            Save
          </button>
        </section>
      </form>
    </main>
  );
};

export default PersonalInformation;
