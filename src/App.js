import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from "./components/Slider.js"
import dt from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from"./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"

function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavOptios miPhones={dt.miPhones} redmiPhones={dt.redmiPhones} tv={dt.tv} laptop={dt.laptop} fitnessAndLifeStyle={dt.fitnessAndLifeStyle} home={dt.home} audio={dt.audio}  accessories={dt.accessories}/>
      <Slider start={dt['banner'].start}/>
      <Offers offer={dt.offer}/>
      <Heading text={"STAR PRODUCTS"}/>
      <StarProduct starProduct={dt.starProduct}/>
      <Heading text={"HOT ACCESSORIES"}/>
      <HotAccessoriesMenu/>

      <Routes>
      <Route exact path="/music" element={<HotAccessories music={dt.hotAccessories.music} musicCover={dt.hotAccessoriesCover.music}  />}>
      </Route>
      <Route exact path="/smartDevice" element={<HotAccessories smartDevice={dt.hotAccessories.smartDevice} smartDeviceCover={dt.hotAccessoriesCover.smartDevice}  />}>
      </Route>

      <Route exact path="/home" element={<HotAccessories home={dt.hotAccessories.home} homeCover={dt.hotAccessoriesCover.home}  />}>
      </Route>

      <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={dt.hotAccessories.lifeStyle} lifeStyleCover={dt.hotAccessoriesCover.lifeStyle}  />}>
      </Route>

      <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={dt.hotAccessories.mobileAccessories} mobileAccessoriesCover={dt.hotAccessoriesCover.mobileAccessories}  />}>
      </Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={dt.productReviews}/>

      <Heading text="VIDEOS"/>
      <Videos videos={dt.videos}/>

      <Heading text="IN THE PRESS"/>
      <Banner banner={dt.banner}/>

      <Footer footer={dt.footer}/>
    </Router>
  );
}

export default App;
