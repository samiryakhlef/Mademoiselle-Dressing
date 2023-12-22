import { useState } from "react";
import "./Home.css";
import { DealsBar } from "./DealsBar/DealsBar";
import Categories from "./Categories/Categories";

/**
 * Composant Home.
 * Affiche une image, du texte et un bouton.
 */
export const Home = () => {
  // Initialisation des variables
  const photo = "https://via.placeholder.com/1200x600"; // URL de la photo
  const text = "Votre texte ici"; // Texte à afficher
  const [buttonText, setButtonText] = useState("Bouton d'appel à l'action"); // État du texte du bouton

  /**
   * Gère l'événement de clic sur le bouton.
   * Met à jour le texte du bouton.
   */
  const handleClick = () => {
    setButtonText("Nouveau texte du bouton");
  };

  // Rendu du composant
  return (
    <div className="container">
      <img src={photo} alt="Photo" />
      <div className="text">{text}</div>
      <button onClick={handleClick}>{buttonText}</button>
      <div>
        <Categories />
        <DealsBar />
      </div>
    </div>
  );
};