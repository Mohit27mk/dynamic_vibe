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
import WhiteFrameTents from './pages/WhiteFrameTents/WhiteFrameTents';
import ClearTopTents from './pages/ClearTopTents/ClearTopTents';
import TentLiner from './pages/TentLiner/TentLiner';
import Skylight from './pages/Skylight/Skylight';
import Sailcloth from './pages/Sailcloth/Sailcloth';
import Swag from './pages/Swag/Swag';


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
        <Route path="/faq" element={<FAQ/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
