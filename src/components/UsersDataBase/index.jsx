import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../hook/create';
import { fetchUsers } from '../../feature/api/counterSlice';

import './style.scss';

const UsersDataBase = () => {
  const userData = useSelector((state) => state.nftMarketPlace?.dataUser);
  const dispatch = useDispatch();

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      await dispatch(fetchUsers());
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <main className="ContainerUserDataBase">
      <section className="ContainerUserDataBase-title">
        <h1 className="ContainerUserDataBase__userRegister">
          Users registered on Nuron
        </h1>
      </section>
      <section className="ContainerUserDataBase-section">
        <section className="ContainerUserDataBase__header">
          <div className="ContainerUserDataBase__header-info">
            <p className="ContainerUserDataBase__header-info_name">
              Fullname
            </p>
            <p className="ContainerUserDataBase__header-info_email">
              Email
            </p>
            <p className="ContainerUserDataBase__header-info_id">
              Id
            </p>
          </div>
        </section>
        {userData
          ? userData?.map((data, index) => (
            <section
              className="ContainerUserDataBase__name"
              key={data._id}
              style={index % 2 === 0 ? { borderRadius: '6px', background: 'rgb(36, 36, 54)' } : null}
            >
              <div className="ContainerUserDataBase__name-info">
                <p className="ContainerUserDataBase__name-info_name">
                  {data.firstname} {data.lastname}
                </p>
                <p className="ContainerUserDataBase__name-info_email">
                  {data.email}
                </p>
                <p className="ContainerUserDataBase__name-info_id">
                  {data._id}
                </p>
              </div>
              <section className="ContainerUserDataBase__containbutton">
                <button
                  type="submit"
                  className="ContainerUserDataBase__button"
                  onClick={() => handleDelete(data._id)}
                >
                  Delete user
                </button>
              </section>
            </section>
          ))
          : null}
      </section>
    </main>
  );
};

export default UsersDataBase;
