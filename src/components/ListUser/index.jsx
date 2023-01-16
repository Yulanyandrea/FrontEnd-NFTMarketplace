import { useSelector } from 'react-redux';
import UserCard from '../UserCard';

import './styles.scss';

const ListUser = () => {
  const allUsers = useSelector((state) => state.nftMarketPlace?.dataUser);

  return (
    <main className="cardlist">
      <div className="cardlist-map">
        {allUsers
          ? allUsers?.map((user) => (
            <UserCard user={user} key={user._id} />
          )) : null}
      </div>
    </main>
  );
};

export default ListUser;
