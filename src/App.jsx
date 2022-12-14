import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData } from './feature/api/counterSlice';
import happy from './components/Footer/images/happy.jpg';
import Navbar from './components/Navbar/index';
import LoginForm from './components/Auth/loginForm';
import RegisterForm from './components/Auth/RegisterForm';
import CreateNFT from './components/CreateNft';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import Details from './pages/Details';
import EditProfile from './components/EditProfile/Edit';
import MenuNavigator from './components/MenuNavigator/index';

import OurCollection from './pages/OurCollection/index';
import Explore from './pages/Explore';
import TopNft from './pages/TopNFT/index';

const App = () => {
  const dispatch = useDispatch();
  const dispatchData = () => {
    dispatch(fetchData());
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
        <Route path="/productdetail/:id" element={<Details />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/createnft" element={<CreateNFT />} />
        <Route path="/ourcollection" element={<OurCollection />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/topnft" element={<TopNft />} />
        <Route path="/editprofile" element={<EditProfile />} />

      </Routes>

      <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} />
    </div>

  );
};

export default App;
