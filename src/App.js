import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import CarRentals from "./pages/carRentals/CarRentals";
import PartyRentals from "./pages/partyRentals/PartyRentals"
import ContactUs from "./pages/ContactUs/ContactUs";
import LimousineService from "./pages/LimousineServices/LimousineService";
import FAQ from "./pages/FAQ/FreqQues.jsx";
import QuoteRequest from './pages/QuoteRequest/QuoteRequest';
import AboutUs from './pages/AboutUs/AboutUs';
import WhiteFrameTents from './pages/TentStyles/WhiteFrameTents/WhiteFrameTents';
import ClearTopTents from './pages/TentStyles/ClearTopTents/ClearTopTents.jsx';
import TentLiner from './pages/TentStyles/TentLiner/TentLiner';
import Skylight from './pages/TentStyles/Skylight/Skylight';
import Sailcloth from './pages/TentStyles/Sailcloth/Sailcloth';
import Swag from './pages/TentStyles/Swag/Swag';
import TentPackages from './pages/Packages/TentPackages/TentPackages';
import TentLinerPackages from './pages/Packages/TentLinerPackages/TentLinerPackages.jsx';
import ClearTopPackages from './pages/Packages/ClearTopPackages/ClearTopPackages';
import SailclothPackages from './pages/Packages/SailclothPackages/SailclothPackages';
import RusticPackages from './pages/Packages/RusticPackages/RusticPackages';
import LoungePackages from './pages/Packages/LoungePackages/LoungePackages';
import TablesAndChairs from './pages/Accessories/TablesAndChairs/TablesAndChairs';
import Linens from './pages/Accessories/Linens/Linens';
import Lighting from './pages/Accessories/Lighting/Lighting';
import Flooring from './pages/Accessories/Flooring/Flooring';
import Bars from './pages/Accessories/Bars/Bars';
import BackdropsAndDraping from './pages/Accessories/BackdropsAndDraping/BackdropsAndDraping';
import AVStaging from './pages/Accessories/AVStaging/AVStaging';
import HeatingAndCooling from './pages/Accessories/HeatingAndCooling/HeatingAndCooling';
import { RusticInventory } from './pages/RusticInventory/RusticInventory';
import RusticGallery from './pages/RusticGallery/RusticGallery';
import LoungeInventory from './pages/LoungeInventory/LoungeInventory';
import LoungeGallery from './pages/LoungeGallery/LoungeGallery';
import Login from "./admin/login/Login.jsx";
import CarRental from "./admin/CarRental/CarRental.jsx";
// import  PartyRental from "./admin/partyRental/PartyRental.jsx";
// import  Users from "./admin/users/Users.jsx";



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carrentals" element={<CarRentals/>} />
        <Route path="/partyrentals" element={<PartyRentals/>} />
        <Route path="/limousine/:serviceType" element={<LimousineService />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/request" element={<QuoteRequest />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/whiteframetents" element={<WhiteFrameTents/>} />
        <Route path="/cleartoptents" element={<ClearTopTents/>} />
        <Route path="/tentliner" element={<TentLiner/>} />
        <Route path="/skylight" element={<Skylight/>} />
        <Route path="/sailcloth" element={<Sailcloth/>} />
        <Route path="/swag" element={<Swag/>} />
        <Route path="/tentpackages" element={<TentPackages/>} />
        <Route path="/tentlinerpackages" element={<TentLinerPackages/>} />
        <Route path="/cleartoppackages" element={<ClearTopPackages/>} />
        <Route path="/sailclothpackages" element={<SailclothPackages/>} />
        <Route path="/rusticpackages" element={<RusticPackages/>} />
        <Route path="/loungepackages" element={<LoungePackages/>} />
        <Route path="/tablesandchairs" element={<TablesAndChairs/>} />
        <Route path="/linens" element={<Linens/>} />
        <Route path="/lighting" element={<Lighting/>} />
        <Route path="/flooring" element={<Flooring/>} />
        <Route path="/bars" element={<Bars/>} />
        <Route path="/backdropsanddraping" element={<BackdropsAndDraping/>} />
        <Route path="/avstaging" element={<AVStaging/>} />
        <Route path="/heatingandcooling" element={<HeatingAndCooling/>} />
        <Route path="/rusticinventory" element={<RusticInventory/>} />
        <Route path="/rusticgallery" element={<RusticGallery/>} />
        <Route path="/loungeinventory" element={<LoungeInventory/>} />
        <Route path="/loungegallery" element={<LoungeGallery/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/admin/login" element={<Login/>} />
        <Route path="/admin/dashboard/car-rental" element={<CarRental/>} />
        {/* <Route path="/admin/dashboard/party-rental" element={<PartyRental/>} />
        <Route path="/admin/dashboard/users" element={<Users/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
