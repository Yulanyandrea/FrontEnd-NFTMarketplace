import { useState } from 'react';
import EditImage from '../../components/EditProfile/EditImage';
import MenuProfile from '../../components/EditProfile/MenuProfile';
import PersonalInformation from '../../components/EditProfile/PersonalInformation';
import ChangePassword from '../../components/EditProfile/ChangePassword';

import './styles.scss';

const Profile = () => {
  const editImage = <EditImage />;
  const personalInfo = <PersonalInformation />;
  const changePassword = <ChangePassword />;

  const [select, setSelect] = useState(editImage);

  return (
    <main className="profile">
      <section className="profile-menu">
        <MenuProfile
          setSelect={setSelect}
          editImage={editImage}
          personalInfo={personalInfo}
          changePassword={changePassword}
        />
      </section>
      <section className="profile-content">{select}</section>
    </main>
  );
};

export default Profile;
