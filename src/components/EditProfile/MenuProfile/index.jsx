/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPenToSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const MenuProfile = (props) => {
  const {
    setSelect,
    editImage,
    personalInfo,
    changePassword,
  } = props;

  return (
    <div className="menuProfile">
      <div className="menuProfile-menu">
        <button
          type="button"
          className="menuProfile-menu_img"
          onClick={() => setSelect(editImage)}
          // style={colorStyle}
        >
          <FontAwesomeIcon
            className="menuProfile-menu_icon"
            icon={faPenToSquare}
          />
          Edit Profile Image
        </button>
        <button
          type="button"
          className="menuProfile-menu_info"
          onClick={() => setSelect(personalInfo)}
        >
          <FontAwesomeIcon className="menuProfile-menu_icon" icon={faUser} />
          Personal Information
        </button>
        <button
          type="button"
          className="menuProfile-menu_pass"
          onClick={() => setSelect(changePassword)}
        >
          <FontAwesomeIcon className="menuProfile-menu_icon" icon={faUnlock} />
          Change Password
        </button>
        <button type="button" className="menuProfile-menu_sett">
          <FontAwesomeIcon className="menuProfile-menu_icon" icon={faBell} />
          Notification Setting
        </button>
      </div>
    </div>
  );
};

export default MenuProfile;
