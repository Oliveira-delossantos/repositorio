import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import ContactPage from './pages/ContactPage';
import './App.css';
import minhaFoto from './assets/minhaFoto.jpg'; // Certifique-se de que a imagem está na pasta 'assets'
import Pokedex from './assets/Pokedex.jpg';
import velha from './assets/velha.jpg';
import bernardo from './assets/bernardo.png';
import lista from './assets/lista.png'
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Seção de Sobre */}
        <div className="about-section">
          <h1>Sobre Mim</h1>
          <div className="about-container">
            {/* Foto */}
            <div className="photo-container">
              <img src={bernardo} alt="bernardo.png" className="profile-photo" />
            </div>

            {/* Descrição */}
            <div className="description">
              <p>
              "Sou Bernardo o programador"
              </p>
            </div>
          </div>
        </div>

        {/* Seção de Projetos */}
        <div className="projects-section">
          <h2>Meus Projetos</h2>
          <div className="projects-container">
            <div className="project">
              <img src={Pokedex} alt="Projeto 1" />
              <a href="https://github.com/Oliveira-delossantos/PokedexTest" target="_blank" rel="noopener noreferrer">Ver Projeto Pokedex com API</a>
            </div>
            <div className="project">
              <img src={lista}alt="Projeto 2" />
              <a href="https://github.com/Oliveira-delossantos/ListaEncadeada" target="_blank" rel="noopener noreferrer">Ver Projeto Lista</a>
            </div>
          </div>
        </div>

        {/* Seção de Contato */}
        <div className="contact-section">
          <h2>Entre em Contato</h2>
          <p>Se você tem um projeto ou oportunidade interessante, entre em contato comigo!</p>
          <a href="mailto:analistajggl@gmai">Enviar Email</a>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
