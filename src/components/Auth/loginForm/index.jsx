import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../feature/api/counterSlice';
import logoGoogle from '../../../assets/google.png';
import logoFacebook from '../../../assets/facebook.png';
import logoTwitter from '../../../assets/twitter.png';
import logoLinkedin from '../../../assets/linkedin.png';

import './styles.scss';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const user = useSelector((state) => state.nftMarketPlace.user?.profile);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginUser(form));
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
    <div className="login-form">
      <form className="login-form-first">
        <h2 className="login-form-title-login">Login</h2>
        <div className="login-from-email">
          <label htmlFor="email">Email address</label>
          <input
            className="login-from-input"
            id="email"
            type="text"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="login-from-password">
          <label htmlFor="password">Password</label>
          <input
            className="login-from-input"
            id="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="login-from-checkbox">
          <input
            className="login-from-input"
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
            onClick={() => navigate('/register')}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="login-form-second">
        <h2 className="login-form-title-login">Another way yo long in</h2>
        <h4 className="login-form-description">Lorem Ipsum is simply dummy text of the typesetting industry.</h4>
        <div className="login-from-second-redsocials">
          <button className="login-from-google" type="submit">
            <img className="login-from-img" src={logoGoogle} alt="google" />
            <span>Log in with Google</span>
          </button>
          <button className="login-from-facebook" type="submit">
            <img className="login-from-img" src={logoFacebook} alt="google" />
            <span>Log in with Facebook</span>
          </button>
          <button className="login-from-twitter" type="submit">
            <img className="login-from-img" src={logoTwitter} alt="google" />
            <span>Log in with Twitter</span>
          </button>
          <button className="login-from-linkedin" type="submit">
            <img className="login-from-img" src={logoLinkedin} alt="google" />
            <span>Log in with Linkedin</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
