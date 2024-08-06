import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!email || !password) {
            setError('Tous les champs sont obligatoires.');
            return;
        }

        // Placeholder for actual authentication logic
        if (email === 'test@example.com' && password === 'password123') {
            navigate('/dashboard'); // Redirect to a dashboard or home page after successful login
        } else {
            setError('Email ou mot de passe incorrect.');
        }
    };

    return (
        <div className="container shadow-sm py-4">
            <h2 className="my-4">Se Connecter</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-dark">Se Connecter</button>
            </form>
        </div>
    );
};

export default Login;
