import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import CarRentals from "./pages/carRentals/CarRentals";
import PartyRentals from "./pages/partyRentals/PartyRentals"
import ContactUs from "./components/HomePage/ContactUs/ContactUs";



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carrentals" element={<CarRentals/>} />
        <Route path="/partyrentals" element={<PartyRentals/>} />
        <Route path="/contact" element={<ContactUs/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
