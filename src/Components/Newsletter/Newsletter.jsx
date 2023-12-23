import "./Newsletter.css";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="newsletter-banner">
                <h2 className="newsletter-title">Newsletter</h2>
                <p className="newsletter-description">Abonnez-vous à notre newsletter pour être aux premières loges des dernières tendances, offres spéciales et événements exclusifs.</p>
            </div>
            <div className="newsletter-content">
                <input className="newsletter-input" type="email" name="email" id="newsletter-email" placeholder="Enter your email" />
                <button className="newsletter-button">Subscribe</button>
            </div>
        </div>
    );
}

export default Newsletter;