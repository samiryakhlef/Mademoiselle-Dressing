import { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour vérifier les informations de connexion et effectuer l'authentification
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-form-container">
            <h1 className="login-form-title">Connexion à votre compte</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="login-form-label">Email:</label>
                    <input className="login-form-input" type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label className="login-form-label">Mot de passe:</label>
                    <input className="login-form-input" type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="login-form-submit-button" type="submit">Se connecter</button>
            </form>
            <span className="login-form-register-link">Pas encore inscrit? Veuillez vous inscrire en cliquant sur <Link to="/inscription">Inscription</Link></span>
        </div>
    );
};