import { useState } from 'react';
import './styles.scss';
import logoGoogle from '../../../assets/google.png';
import logoFacebook from '../../../assets/facebook.png';
import logoTwitter from '../../../assets/twitter.png';
import logoLinkedin from '../../../assets/linkedin.png';

const RegisterForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const API = 'http://localhost:3000/api/';
  // const { showRegisterForm } = props;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      method: 'POST',
      headers: {
        'Content-type': 'aplication/json',
      },
      body: JSON.stringify(form),
    };

    try {
      const response = await fetch(API, payload);
      const data = await response.json();
      // eslint-disable-next-line
      console.log(data);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const [checkbox, setCheckbox] = useState(false);

  const handleCheckChange = () => {
    setCheckbox(!checkbox);
  };
  // console.log(checkbox ? 'checkbox' : 'No select checkbox');

  return (
    <div className="register-form">
      <form className="register-form-first">
        <h2 className="register-form-title-register">Sign up</h2>
        <div className="register-from__firstname">
          <label className="register-form-first__label" htmlFor="firstname">
            First name
          </label>
          <input
            className="register-from-input"
            id="firstname"
            type="text"
            value={form.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="register-from__lastname">
          <label className="register-form-first__label" htmlFor="lastname">
            Email address
          </label>
          <input
            className="register-from-input"
            id="lastname"
            type="text"
            value={form.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="register-from__email">
          <label className="register-form-first__label" htmlFor="email">
            Email address
          </label>
          <input
            className="register-from-input"
            id="email"
            type="text"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="register-from__createpassword">
          <label
            className="register-form-first__label"
            htmlFor="createpassword"
          >
            Password
          </label>
          <input
            className="register-from-input"
            id="createpassword"
            type="password"
            value={form.createpassword}
            onChange={handleChange}
          />
        </div>
        <div className="register-from__repassword">
          <label className="register-form-first__label" htmlFor="repassword">
            Password
          </label>
          <input
            className="register-from-input"
            id="repassword"
            type="password"
            value={form.repassword}
            onChange={handleChange}
          />
        </div>
        <div className="register-from-checkbox">
          <input
            className="register-from-input"
            type="checkbox"
            value="checkbox"
            checked={checkbox}
            onChange={handleCheckChange}
          />
          <span> Remember me leter</span>
        </div>
        <div>
          <button
            className="register-form-button-register"
            type="submit"
            value="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <button
            className="register-form-button-singup"
            type="submit"
            value="signUp"
            // onClick={showRegisterForm}
          >
            Log in
          </button>
        </div>
      </form>
      <div className="register-form-second">
        <div className="register-form-second__info">
          <h2 className="register-form-title-register">
            Another way to Sign up
          </h2>
          <h4 className="register-form-description">
            Lorem Ipsum is simply dummy text of the typesetting industry.
          </h4>
        </div>
        <div className="register-from-second-redsocials">
          <button className="register-from-google" type="submit">
            <img className="register-from-img" src={logoGoogle} alt="google" />
            <span>Log in with Google</span>
          </button>
          <button className="register-from-facebook" type="submit">
            <img
              className="register-from-img"
              src={logoFacebook}
              alt="google"
            />
            <span>Log in with Facebook</span>
          </button>
          <button className="register-from-twitter" type="submit">
            <img className="register-from-img" src={logoTwitter} alt="google" />
            <span>Log in with Twitter</span>
          </button>
          <button className="register-from-linkedin" type="submit">
            <img
              className="register-from-img"
              src={logoLinkedin}
              alt="google"
            />
            <span>Log in with Linkedin</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
