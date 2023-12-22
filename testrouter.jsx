import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Accessories } from "./Pages/Accessories/Accessories";
import { NewArrivals } from "./Pages/NewArrivals/NewArrivals";
import { WomensCollection } from "./Pages/WomensCollection/WomensCollection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nouveautes" element={<NewArrivals />} />
          <Route path="/collection-femme" element={<WomensCollection />} />
          <Route path="/accessoires" element={<Accessories />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
