import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Accessories } from "./Pages/Accessories/Accessories";
import { AccessoriesCollection } from "./Components/Collections/AccessoriesCollection/AccessoriesCollection";
import { AboutPages } from "./Pages/AboutPages/AboutPages.jsx";
import { BestSellersPages } from "./Pages/BestSellersPages/BestSellersPages.jsx";
import { CartPages } from "./Pages/CartPages/CartPages";
import { ContactFormPages } from "./Pages/ContactFormPages/ContactFormPages";
import { Home } from "./Pages/Home/Home";
import { LoginPage } from "./Pages/Auth/Login/LoginPage.jsx";
import { MensCollections } from "./Components/Collections/MensCollections/MensCollections.jsx";
import { Navbar } from "./Components/Navbar/Navbar";
import { NewArrivalsPages } from "./Pages/NewArrivalsPages/NewArrivalsPages";
import { ProductsPages } from "./Pages/ProductsPages/ProductsPages.jsx";
import { RegisterPage } from "./Pages/Auth/Register/RegisterPage.jsx";
import { ShoesPages } from "./Pages/ShoesPages/ShoesPages";
import { WomensCollectionPages } from "./Pages/WomensCollectionPages/WomensCollectionPages";
import { WomensCollections } from "./Components/Collections/WomensCollections/WomensCollections.jsx";
import { ShoesCollections } from "./Components/Collections/ShoesCollections/ShoesCollections.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nouveautes" element={<NewArrivalsPages />} />
          <Route path="/best-sellers" element={<BestSellersPages />} />
          <Route path="/collection-femme" element={<WomensCollectionPages />} />
          <Route path="/accessoires" element={<Accessories />} />
          <Route path="/chaussures" element={<ShoesPages />} />
          <Route path="/hommes" element={<MensCollections />} />
          <Route path="/a-propos" element={<AboutPages />} />
          <Route path="/produits/:id/:title" element={<ProductsPages />} />
          <Route path="/contact" element={<ContactFormPages />} />
          <Route path="/categories/:id/hommes" element={<MensCollections />} />
          <Route path="/categories/:id/femmes" element={<WomensCollections />} />
          <Route path="/categories/:id/chaussures" element={<ShoesCollections />} />
          <Route path="/categories/:id/accessoires" element={<AccessoriesCollection />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/inscription" element={<RegisterPage />} />
          <Route path="/panier" element={<CartPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;