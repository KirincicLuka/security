import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import XSSAttack from './components/XSSAttack';
import SensitiveDataExposure from './components/SensitiveDataExposure';

function HomePage() {
    return (
        <div>
            <h2>Welcome to the Security App</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/xss-attack">XSS Attack</Link>
                    </li>
                    <li>
                        <Link to="/sensitive-data-exposure">Sensitive Data Exposure</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div>
                <h1>Security App</h1>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/xss-attack" element={<XSSAttack />} />
                    <Route path="/sensitive-data-exposure" element={<SensitiveDataExposure />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;