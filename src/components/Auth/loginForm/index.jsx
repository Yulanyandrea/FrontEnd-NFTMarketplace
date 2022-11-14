import { useState } from 'react';
import './styles.scss';
import logoGoogle from './images/google.png';
import logoFacebook from './images/facebook.png';
import logoTwitter from './images/twitter.png';
import logoLinkedin from './images/linkedin.png';

const LoginForm = () => {
  // const { showRegisterForm } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  // console.log(`El email es: ${form.email}`);

  const [checkbox, setCheckbox] = useState(false);

  const handleCheckChange = () => {
    setCheckbox(!checkbox);
  };
  // console.log(checkbox ? 'checkbox' : 'No select checkbox');

  return (
    <div className="login-form">
      <form className="login-form-first">
        <h2 className="title">Login</h2>
        <div className="login-from-email">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="text"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="login-from-password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="login-from-checkbox">
          <input
            type="checkbox"
            value="checkbox"
            checked={checkbox}
            onChange={handleCheckChange}
          />
          <span> Remember me leter</span>
        </div>
        <div>
          <button
            className="login-form-button-login"
            type="submit"
            value="submit"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <button
            className="login-form-button-singup"
            type="submit"
            value="signUp"
            // onClick={showRegisterForm}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="login-form-second">
        <h2 className="title">Another way yo long in</h2>
        <h4>Lorem Ipsum is simply dummy text of the typesetting industry.</h4>
        <div className="login-from-second-redsocials">
          <button className="login-from-google" type="submit">
            <img src={logoGoogle} alt="google" />
            <span>Log in with Google</span>
          </button>
          <button className="login-from-facebook" type="submit">
            <img src={logoFacebook} alt="google" />
            <span>Log in with Facebook</span>
          </button>
          <button className="login-from-twitter" type="submit">
            <img src={logoTwitter} alt="google" />
            <span>Log in with Twitter</span>
          </button>
          <button className="login-from-linkedin" type="submit">
            <img src={logoLinkedin} alt="google" />
            <span>Log in with Linkedin</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
