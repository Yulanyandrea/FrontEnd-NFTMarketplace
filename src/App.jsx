import './App.css';

import CreateNFT from './components/CreateNft';
// import Footer from './components/footer/index';
import Navbar from './components/Navbar/index';

const App = () => (
  <div className="App">
    {/* <TopCollection imageSell={tree} imageProfile={profile} /> */}
    {/* <TopSeller imageTop={flower} textTop="TrodBrand" priceTop="$400" /> */}
    {/* <NftCard bit="5+" name="NameStroam" bid="1/20" price="0.244" likes="532" /> */}
    {/* <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} /> */}
    <Navbar />
    <CreateNFT />
  </div>
);

export default App;
