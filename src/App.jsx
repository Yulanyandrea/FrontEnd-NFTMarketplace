import './App.scss';
import { Routes, Route } from 'react-router-dom';
import happy from './components/Footer/images/happy.jpg';
import Navbar from './components/Navbar/index';
import LoginForm from './components/Auth/loginForm';
import RegisterForm from './components/Auth/RegisterForm';
import CreateNFT from './components/CreateNft';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import Details from './pages/Details';
// import Create from './components/CreateandSell';
// import message from './components/CreateandSell/images/message.jpg';
import MenuNavigator from './components/MenuNavigator/index';

import OurCollection from './pages/OurCollection/index';
import Explore from './pages/Explore';
import TopNft from './pages/TopNFT/index';

const App = () => {
  return (

    <div className="App">
      {/* <Create
        title="STEP-01"
        imageHeader={message}
        titleArticle="Set up your wallet"
        description="Powerful features and inclusions,
      which makes Nuron standout, easily customizable and scalable."
      /> */}
      {/* <CreateNFT /> */}
      {/* <TopCollection imageSell={tree} imageProfile={profile} /> */}
      {/* <TopSeller imageTop={flower} textTop="TrodBrand" priceTop="$400" /> */}
      {/* <NftCard bit="5+" name="NameStroam" bid="1/20" price="0.244" likes="532" /> */}
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

      </Routes>

      <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} />
    </div>

  );
};

export default App;
