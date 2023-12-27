import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Accessories } from "./Pages/Accessories/Accessories";
import { AccessoriesCollection } from "./Components/Collections/AccessoriesCollection/AccessoriesCollection";
import { AboutPages } from "./Pages/AboutPages/AboutPages";
import { BestSellersPages } from "./Pages/BestSellersPages/BestSellersPages";
import { CartPages } from "./Pages/CartPages/CartPages";
import { ContactFormPages } from "./Pages/ContactFormPages/ContactFormPages";
import { HomePages } from "./Pages/HomePages/HomePages";
import { LoginPage } from "./Pages/Auth/Login/LoginPage";
import { MensCollections } from "./Components/Collections/MensCollections/MensCollections";
import { Navbar } from "./Components/Navbar/Navbar";
import { NewArrivalsPages } from "./Pages/NewArrivalsPages/NewArrivalsPages";
import { ProductsPages } from "./Pages/ProductsPages/ProductsPages";
import { RegisterPage } from "./Pages/Auth/Register/RegisterPage";
import { ShoesPages } from "./Pages/ShoesPages/ShoesPages";
import { WomensCollectionPages } from "./Pages/WomensCollectionPages/WomensCollectionPages";
import { WomensCollections } from "./Components/Collections/WomensCollections/WomensCollections";
import { ShoesCollections } from "./Components/Collections/ShoesCollections/ShoesCollections";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePages />} />
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