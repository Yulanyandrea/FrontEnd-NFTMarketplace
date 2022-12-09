import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUnlock,
  faUser,
  faBell,
  faPenToSquare,
  faEye,
}
  from '@fortawesome/free-solid-svg-icons';
import EditImage from '../EditImage';
import './style.scss';

const EditProfile = () => {
  return (
    <div name="editprofile" className="editprofile">
      <div className="editprofile-header">
        <h3>Edit Your Profile</h3>
        <button type="button" className="editprofile-header_button">
          <FontAwesomeIcon className="editprofile-header_button-icon" icon={faEye} />
          Preview
        </button>
      </div>
      <div className="editprofile-card">
        <div className="editprofile-menu">
          <div className="editprofile-menu_options">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="editprofile-menu_options-icon"
            />
            <h3>Edit Profile Image</h3>
          </div>
          <div className="editprofile-menu_options">
            <FontAwesomeIcon
              icon={faUser}
              className="editprofile-menu_options-icon"
            />
            <h3>Personal Information</h3>
          </div>
          <div className="editprofile-menu_options">
            <FontAwesomeIcon
              icon={faUnlock}
              className="editprofile-menu_options-icon"
            />
            <h3>Change Password</h3>
          </div>
          <div className="editprofile-menu_options">
            <FontAwesomeIcon
              icon={faBell}
              className="editprofile-menu_options-icon"
            />
            <h3>Notification Setting</h3>
          </div>
        </div>
        <EditImage />
      </div>
    </div>
  );
};

export default EditProfile;
