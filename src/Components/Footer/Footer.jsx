// Footer.js

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">À Propos</h3>
                    <p className="footer-text">Découvrez notre histoire et notre engagement envers la qualité.</p>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Contacts</h3>
                    <p className="footer-text">Adresse: 123 Rue de la Mode, 75001 Paris</p>
                    <p className="footer-text">Email: contact@votresite.com</p>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Suivez-nous</h3>
                    <div className="footer-social-icons">
                        {/* Ajoutez ici vos icônes de réseaux sociaux */}
                        <a href="#" className="footer-social-icon">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="footer-social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="footer-social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-bottom-text">© 2023 VotreSite. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
