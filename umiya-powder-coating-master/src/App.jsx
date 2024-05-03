import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import AboutUs from "./components/AboutUs";
import ColorPicker from "./components/ColorPicker";
import Glossy from "./components/Glossy";
import SemiGlossy from "./components/SemiGlossy";
import PurePolyester from "./components/PurePolyester";
import Matt from "./components/Matt";
import ColorSelection from "./components/ColorSelection";
import InvoiceGeneration from "./components/InvoiceGeneration";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/homepage/*" element={<HomePage />} />
        <Route path="/UserProfile" element={<UserProfile/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ColorPicker" element={<ColorPicker/>}/>
        <Route path="/glossy" element={<Glossy/>}/>
        <Route path="/semiglossy" element={<SemiGlossy/>}/>
        <Route path="/polyester" element={<PurePolyester/>}/>
        <Route path="/matt" element={<Matt/>}/>
        <Route path="/InvoiceGeneration" element={<InvoiceGeneration/>}/>
      </Routes>
    </Router>
  );
}

export default App;
