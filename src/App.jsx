import './App.css';
// import Footer from './components/Footer/Footer';
// import happy from './components/Footer/images/happy.jpg';
import TopCollection from './components/TopCollection/TopCollection';
import tree from './components/TopCollection/images/tree.jpg';
import profile from './components/TopCollection/images/profile.png';
// import TopSeller from './components/TopSeller/TopSeller';
// import flower from './components/TopSeller/images/flower.jpg';

const App = () => (
  <div className="App">
    <TopCollection imageSell={tree} imageProfile={profile} name="Cubic" items={27} />
    {/* <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} /> */}
    {/* <TopSeller imageTop={flower} textTop="TrodBrand" priceTop="$400" /> */}
  </div>
);

export default App;
