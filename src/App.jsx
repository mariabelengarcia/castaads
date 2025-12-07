import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Compu from "./assets/img/compu.png";
import Star from "./assets/img/star.svg";
import Rulo from "./assets/img/rulo.svg";
import projects from "./data/projects";
import Footer from "./components/footer/Footer";
import Contacto from "./Contacto";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const cardItems = projects;

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div
                  id="home"
                  className="home d-flex justify-content-space-between align-items-center"
                >
                  <div className="main-title">
                    <h1>
                      El impulso
                      <br />
                      que hace crecer
                      <br />
                      tu marca
                    </h1>

                    <Link to="/contacto">
                      <Button texto="Hablemos!" variant="primario" />
                    </Link>
                  </div>
                  <div>
                    <img
                      src={Compu}
                      alt="Una mano sosteniendo un megáfono sale desde la pantalla de una computadora portátil, con un fondo de líneas onduladas en tonos azul y turquesa"
                    />
                  </div>
                </div>

                <div className="conocenos" id="conocenos">
                  <div className="conocenos-row">
                    <div className="conocenos-title">
                      <h2>Conocenos !</h2>
                    </div>
                    <div className="conocenos-image">
                      <img src={Star} alt="Descripción de la imagen" />
                    </div>
                  </div>
                  <div className="conocenos-row conocenos-text-row">
                    <div>
                      <p>
                        En nuestra agencia creemos que cada emprendimiento tiene
                        una historia única y un potencial enorme por desarrollar.
                        Por eso trabajamos para acompañarte en cada etapa,
                        transformando tus ideas en estrategias claras, medibles y
                        efectivas.
                      </p>
                    </div>
                    <div>
                      <p>
                        Nos comprometemos con un estilo de trabajo transparente,
                        cercano y accesible, pensado especialmente para
                        emprendedores que necesitan soluciones profesionales sin
                        perder simplicidad y claridad. Si estás listo para dar
                        el próximo paso con tu marca, estamos acá para hacerlo
                        juntos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="trabajos" id="trabajos">
                  <div className="conocenos-row">
                    <div className="conocenos-image">
                      <img src={Rulo} alt="Descripción de la imagen" />
                    </div>
                    <div className="conocenos-title">
                      <h2>Nuestros trabajos</h2>
                    </div>
                  </div>
                  <div className="cards-container">
                    {cardItems.map((item, idx) => (
                      <Card
                        key={item.id || idx}
                        id={item.id}
                        image={item.images[0]}
                        title={item.title}
                        text={item.text}
                      />
                    ))}
                  </div>
                </div>
              </main>
            }
          />

          <Route path="/contacto" element={<Contacto />} />
          <Route path="/trabajos/:id" element={<ProjectPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
