import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faPenToSquare,
  faShareNodes,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

import './styless.scss';

const UserHeader = () => {
  const user = useSelector((state) => state.nftMarketPlace?.currentUserSelect);
  // console.log(user.profilepicture);

  const background = 'https://source.unsplash.com/random/1440x900';
  const avatar = `https://robohash.org/${user?.firstname}.png`;

  return (
    <div className="profileheader">
      <div className="profileheader-background">
        <img
          src={background}
          className="profileheader-background_img"
          alt="header"
        />
      </div>
      <div className="profileheader-info">
        <div className="profileheader-info_avatar">
          {user?.profilepicture ? (
            <img
              src={user.profilepicture}
              className="profileheader-info_avatar_img"
              alt="avatar"
            />
          ) : (
            <img
              src={avatar}
              className="profileheader-info_avatar_img"
              alt="avatar"
            />
          )}
        </div>
        <div className="profileheader-info_fullname">
          <h2>
            {user?.firstname} {user?.lastname}
          </h2>
        </div>
        <div className="profileheader-info-social">
          <h3 className="profileheader-info-social_red">{user?.email}</h3>
          <div className="profileheader-info-social_follow">
            <div className="profileheader-info-social_follow_followers">
              <h3 className="profileheader-info-social_follow_followers_numbers">
                164k
              </h3>
              <h3 className="profileheader-info-social_follow_followers_title">
                followers
              </h3>
            </div>
            <div className="profileheader-info-social_follow_following">
              <h3 className="profileheader-info-social_follow_following_numbers">
                120
              </h3>
              <h3 className="profileheader-info-social_follow_following_title">
                following
              </h3>
            </div>
          </div>
        </div>
        <div className="profileheader-info-social-buttons">
          <button
            type="button"
            className="profileheader-info-social-buttons-btn1"
          >
            <FontAwesomeIcon icon={faUserPlus} /> Follow
          </button>
          <button
            type="button"
            className="profileheader-info-social-buttons-btn2"
          >
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
          <button
            type="button"
            className="profileheader-info-social-buttons-btn3"
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
          <button
            type="button"
            className="profileheader-info-social-buttons-btn4"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
