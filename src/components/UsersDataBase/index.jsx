/* eslint-disable react/no-unescaped-entities */
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../hook/create';
import './style.scss';
import { fetchUsers } from '../../feature/api/counterSlice';

const UsersDataBase = () => {
  const userData = useSelector((state) => state.nftMarketPlace?.dataUser);
  const dispatch = useDispatch();

  const handleDelete = async (userId) => {
    console.log(userId);
    try {
      await deleteUser(userId);
      await dispatch(fetchUsers());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="ContainerUserDataBase">
      <h1 className="ContainerUserDataBase__userRegister">Users registered on Nuron</h1>
      {userData
        ? userData?.map((data) => (
          <table className="ContainerUserDataBase__name" key={data._id}>
            <thead>
              <tr className="ContainerUserDataBase__tableHead">
                <th className="ContainerUserDataBase__nametitle--contain">
                  <h3 className="ContainerUserDataBase__name--title"> Name: </h3>
                </th>
                <th className="ContainerUserDataBase__email">
                  <h3 className="ContainerUserDataBase__email--title">Email:</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <td className="ContainerUserDataBase__name--info"> {data.firstname} {data.lastname} </td>
              <td>{data.email}</td>

            </tbody>

            <section className="ContainerUserDataBase__containbutton">
              <button type="submit" className="ContainerUserDataBase__button" onClick={() => handleDelete(data._id)}>Delete user</button>
            </section>
          </table>

        )) : null }

    </main>

  );
};
export default UsersDataBase;
