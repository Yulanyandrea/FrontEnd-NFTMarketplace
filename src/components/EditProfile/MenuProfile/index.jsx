/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPenToSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const MenuProfile = (props) => {
  const [active, setActive] = useState(null);

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
          name="edit"
          className="menuProfile-menu_img"
          onClick={(event) => {
            setSelect(editImage); setActive(event.target.name);
          }}
          style={active === 'edit' ? { background: '#00A3FF', border: 'none' } : null}
        >
          <FontAwesomeIcon
            className="menuProfile-menu_icon"
            icon={faPenToSquare}
          />
          Edit Profile Image
        </button>
        <button
          type="button"
          name="info"
          className="menuProfile-menu_info"
          onClick={(event) => {
            setSelect(personalInfo); setActive(event.target.name);
          }}
          style={active === 'info' ? { background: '#00A3FF', border: 'none' } : null}
        >
          <FontAwesomeIcon className="menuProfile-menu_icon" icon={faUser} />
          Personal Information
        </button>
        <button
          type="button"
          name="change"
          className="menuProfile-menu_pass"
          onClick={(event) => {
            setSelect(changePassword); setActive(event.target.name);
          }}
          style={active === 'change' ? { background: '#00A3FF', border: 'none' } : null}
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
