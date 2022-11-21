import './App.scss';
import { Routes, Route } from 'react-router-dom';
import happy from './components/footer/images/happy.jpg';

import Navbar from './components/Navbar/index';
import LoginForm from './components/Auth/loginForm';
import RegisterForm from './components/Auth/RegisterForm';
import CreateNFT from './components/CreateNft';
<<<<<<< HEAD
import Footer from './components/footer/index';
import Home from './components/Home';
=======
import Footer from './components/Footer/index';
import Home from './components/Home';
import happy from './components/Footer/images/happy.jpg';
// import Create from './components/CreateandSell';
// import message from './components/CreateandSell/images/message.jpg';
import Details from './pages/Details';

>>>>>>> 2352bb522ef7e7d3434b96b3a1c2326a3a43557c

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

<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/createnft" element={<CreateNFT />} />
    </Routes>
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail/:id" element={<Details />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/createnft" element={<CreateNFT />} />
      </Routes>
>>>>>>> 2352bb522ef7e7d3434b96b3a1c2326a3a43557c

      <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} />
    </div>
  );
};

export default App;
