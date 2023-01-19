import { useSelector } from 'react-redux';
import UsersDataBase from '../UsersDataBase';

/* eslint-disable react/prop-types */
const RequireAuth = ({ children, roles }) => {
  const userAuth = useSelector((state) => state.nftMarketPlace?.user?.profile?.role);

  return (
    <section>
      {userAuth === roles ? <UsersDataBase /> : children }
    </section>
  );
};

export default RequireAuth;
