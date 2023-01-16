import UserContent from '../../components/UserContent';
import UserHeader from '../../components/UserHeader';

import './styles.scss';

const User = () => {
  return (
    <div className="userSelect">
      <UserHeader />
      <UserContent />
    </div>
  );
};

export default User;
