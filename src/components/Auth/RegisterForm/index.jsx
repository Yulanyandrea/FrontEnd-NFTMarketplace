import { useState } from 'react';
import { createUser } from '../../../hook/create';
import './styles.scss';
import logoGoogle from '../../../assets/google.png';
import logoFacebook from '../../../assets/facebook.png';
import logoTwitter from '../../../assets/twitter.png';
import logoLinkedin from '../../../assets/linkedin.png';

const RegisterForm = () => {
  const [form, setForm] = useState({
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repassword: '',
  });

  const [checkbox, setCheckbox] = useState(false);

  // const { showRegisterForm } = props;

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createUser(form);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  const handleCheckChange = () => {
    setCheckbox(!checkbox);
  };
  // console.log(checkbox ? 'checkbox' : 'No select checkbox');

  return (
    <div className="register-form">
      <form className="register-form-first" onSubmit={handleSubmit}>
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
            Last name
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
            id="password"
            type="password"
            value={form.password}
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
