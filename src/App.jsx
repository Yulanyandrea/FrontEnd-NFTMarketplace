import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/index';
import LoginForm from './components/Auth/loginForm';
import RegisterForm from './components/Auth/RegisterForm';
import CreateNFT from './components/CreateNft';
import Footer from './components/footer/index';
import Home from './components/Home';

import happy from './components/footer/images/happy.jpg';

const App = () => (
  <div className="App">
    {/* <TopCollection imageSell={tree} imageProfile={profile} /> */}
    {/* <TopSeller imageTop={flower} textTop="TrodBrand" priceTop="$400" /> */}
    {/* <NftCard bit="5+" name="NameStroam" bid="1/20" price="0.244" likes="532" /> */}
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/createnft" element={<CreateNFT />} />
    </Routes>

    <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} />

  </div>
);

export default App;
