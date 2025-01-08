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
import Login from "./admin/login/Login.jsx";
import  CarRental from "./admin/CarRental/CarRental.jsx";
import  PartyRental from "./admin/partyRental/PartyRental.jsx";
import  Users from "./admin/users/Users.jsx";



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
