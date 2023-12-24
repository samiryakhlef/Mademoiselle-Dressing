import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { NewArrivals } from "./Pages/NewArrivals/NewArrivals";
import { WomensCollection } from "./Pages/WomensCollection/WomensCollection";
import { Accessories } from "./Pages/Accessories/Accessories";
import { About } from './Pages/About/About.jsx';
import { Products } from "./Pages/Products/Products.jsx";
import { BestSellers } from "./Pages/BestSellers/BestSellers.jsx";
import { ContactForm } from "./Components/Navbar/ContactForm/ContactForm.jsx"
import { MensCollections} from './Components/Collections/MensCollections/MensCollections.jsx'
import { WomensCollections} from './Components/Collections/WomensCollections/WomensCollections.jsx'
import {ShoesCollections} from './Components/Collections/ShoesCollections/ShoesCollections.jsx'
import {AccessoriesCollection } from "./Components/Collections/AccessoriesCollection/AccessoriesCollection.jsx"
import { LoginPage } from "./Pages/Auth/Login/LoginPage.jsx";
import { RegisterPage } from "./Pages/Auth/Register/RegisterPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nouveautes" element={<NewArrivals />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/collection-femme" element={<WomensCollection />} />
          <Route path="/accessoires" element={<Accessories />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/produits/:id/:title" element={<Products />} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/categories/:id/hommes" element={<MensCollections/>} />
          <Route path="/categories/:id/femmes" element={<WomensCollections/>} />
          <Route path="/categories/:id/chaussures" element={<ShoesCollections/>} />
          <Route path="/categories/:id/accessoires" element={<AccessoriesCollection/>} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/inscription" element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;