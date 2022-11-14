import './App.css';
// import Footer from './components/footer/Footer';
// import TopCollection from './components/TopCollection/TopCollection';
// import happy from './components/footer/images/happy.jpg';
// import tree from './components/TopCollection/images/tree.jpg';
// import profile from './components/TopCollection/images/profile.png';
import TopSeller from './components/TopSeller/TopSeller';
import flower from './components/TopSeller/images/flower.jpg';

const App = () => (
  <div className="App">
    {/* <TopCollection imageSell={tree} imageProfile={profile} /> */}
    {/* <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} /> */}
    <TopSeller imageTop={flower} textTop="TrodBrand" priceTop="$400" />
  </div>
);

export default App;
