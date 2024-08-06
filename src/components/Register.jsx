import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [registered, setRegistered] = useState(false);
    const navigate = useNavigate();

    // Fonction de validation pour vérifier les entrées utilisateur
    const validate = () => {
        const errors = {};
        if (!formData.username) errors.username = 'Le nom d’utilisateur est requis';
        if (!formData.email) errors.email = 'L’email est requis';
        if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'L’email est invalide';
        if (!formData.password) errors.password = 'Le mot de passe est requis';
        if (formData.password.length < 6) errors.password = 'Le mot de passe doit contenir au moins 6 caractères';
        return errors;
    };

    // Fonction pour gérer les changements de valeur dans les champs du formulaire
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Simuler le processus d'inscription
            setRegistered(true);
            setTimeout(() => {
                navigate('/');
            }, 2000); // Redirection vers la page d'accueil après 2 secondes
        }
    };

    return (
        <div className="container shadow-sm my-5 py-4">
            {registered ? (
                <div className="alert alert-success" role="alert">
                    Inscription réussie ! Redirection vers la page d'accueil...
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Inscription</h2>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Nom d’utilisateur</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <div className="text-danger">{errors.username}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-outline-dark">S'inscrire</button>
                </form>
            )}
        </div>
    );
}

export default Register;

