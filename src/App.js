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




function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carrentals" element={<CarRentals/>} />
        <Route path="/partyrentals" element={<PartyRentals/>} />
        <Route path="/limousine/:serviceType" element={<LimousineService />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/faq" element={<FAQ/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
