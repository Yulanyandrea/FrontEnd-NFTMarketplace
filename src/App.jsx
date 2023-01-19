import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData, fetchUsers } from './feature/api/counterSlice';
import happy from './components/Footer/images/happy.jpg';
import Navbar from './components/Navbar/index';
import LoginForm from './components/Auth/loginForm';
import RegisterForm from './components/Auth/RegisterForm';
import CreateNFT from './components/CreateNft';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import Details from './pages/Details';
import MenuNavigator from './components/MenuNavigator/index';
import OurCollection from './pages/OurCollection/index';
import Explore from './pages/Explore';
import TopNft from './pages/TopNFT/index';
import User from './pages/User';
import Profile from './pages/Profile';
import NotAuth from './pages/NotAuthorized/index';
import RequireAuth from './components/RequireAuth';
import Payment from './pages/Payment';

const App = () => {
  const dispatch = useDispatch();
  const dispatchData = () => {
    dispatch(fetchData());
    dispatch(fetchUsers());
  };

  useEffect(() => {
    dispatchData();
  }, []);

  return (

    <div className="App">
      <Navbar />
      <MenuNavigator nameRoute="home" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<User />} />
        <Route path="/productdetail/:id" element={<Details />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/createnft" element={<CreateNFT />} />
        <Route path="/ourcollection" element={<OurCollection />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/topnft" element={<TopNft />} />
        <Route path="/checkout" element={<Payment />} />
        <Route
          path="/userdata_base"
          element={(
            <RequireAuth roles="ADMIN">
              <NotAuth />
            </RequireAuth>
)}
        />
        <Route
          path="/userdata_base"
          element={(
            <RequireAuth roles="ADMIN">
              <NotAuth />
            </RequireAuth>
)}
        />

      </Routes>

      <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} />
    </div>

  );
};

export default App;
