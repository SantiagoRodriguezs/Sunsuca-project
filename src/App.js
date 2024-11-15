import React from 'react';
import Card from './components/Card';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="path/to/logo.png" alt="SUNSUCA Logo" className="logo" />
        <nav className="nav">
          <a href="#services">Servicios</a>
          <a href="#gallery">Galería</a>
          <a href="#about">Acerca de</a>
          <a href="#contact">Contacto</a>
        </nav>
        <a href='#Log'><button className="small-login-button">Iniciar Sesión</button></a>
      </header>

      <section className="slogan-section">
        <h2 className="slogan">“Innovación Verde para un Futuro Sostenible”</h2>
      </section>

      <section id="services" className="services">
        <Card
          title="Servicio de Siembra Ecológica"
          description="Ofrecemos métodos de siembra ecológicos que promueven la sostenibilidad y cuidado del suelo."
          image="path/to/image1.jpg"
        />
        <Card
          title="Riego Automático de Hectáreas"
          description="Automatización de riego para optimizar el uso de recursos y mejorar el rendimiento de los cultivos."
          image="path/to/image2.jpg"
        />

      </section>

      <section id='Log'>
        <Login />
      </section>

    </div>
  );
}

export default App;
