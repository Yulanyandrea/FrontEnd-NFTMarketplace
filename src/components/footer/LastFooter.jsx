import './styleLastFooter.scss';
import facebook from './images/facebook.jpg';
import twiter from './images/twiter.jpg';
import instagram from './images/instagram.jpg';
import social from './images/social.jpg';
import message from './images/message.jpg';

const LastFooter = () => {
  return (
    <div>
      <section className="cardFooter__lastfooter">
        <p className="cardFooter__inc">@2022 Nuron, Inc. All rights reserved.</p>
        <p className="cardFooter__policy">Terms . Privacy Policy</p>
        <div className="cardFooter__socialMedia">
          <img src={facebook} alt="facebook" className="cardFooter__facebook" />
          <img src={twiter} alt="twiter" className="cardFooter__facebook" />
          <img src={instagram} alt="instagram" className="cardFooter__facebook" />
          <img src={social} alt="social" className="cardFooter__facebook" />
          <img src={message} alt="message" className="cardFooter__facebook" />
        </div>
      </section>
    </div>
  );
};

export default LastFooter;
