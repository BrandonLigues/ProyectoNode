import React from 'react';
import './App.css';
import LoginWithGoogle from './LoginWithGoogle';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

function App() {
    return (
        
        <div className="App">
            <header className="App-header">
            <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} /> {/* Añade la imagen aquí */}
                <h1>Bienvenido</h1>
                <LoginWithGoogle />
            </header>
        </div>
    );
}

export default App;