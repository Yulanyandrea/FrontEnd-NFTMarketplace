/* eslint-disable react/prop-types */
// import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UsersDataBase from '../UsersDataBase';

const RequireAuth = ({ children, roles }) => {
  const userAuth = useSelector((state) => state.nftMarketPlace?.user?.profile?.role);

  return (
    <section>
      {userAuth === roles ? <UsersDataBase /> : children }

    </section>
  );
};

export default RequireAuth;
