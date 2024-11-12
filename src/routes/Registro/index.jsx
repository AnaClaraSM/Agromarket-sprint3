// Registro.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/registro.css';

const Registro = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card">
        <header className="d-flex justify-content-center">
          <nav>
            <img src="public/assets/images/logo.png" alt="Logo" />
            <div className="header-title mt-4">AGROMARKET</div>
          </nav>
        </header>

        <form className="form-group">
          <div className="mb-3 bg p-5 rounded">
            <h2 className="text-center container-login">CADASTRO</h2>
            <p className="container-text text-center containe-bg">QUAL É O SEU PERFIL?</p>
            
            <div className="container-cadastro row pb-4">
              <div className="col-6 d-flex justify-content-center">
                <p>CONSUMIDOR</p>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <p>PRODUTOR</p>
              </div>
            </div>

            <div className="row pb-4">
              <div className="container-perfil col-6 d-flex justify-content-center">
                <button 
                  type="button" 
                  onClick={() => navigate('/cadastroConsumidor')} 
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  <img src="public/assets/images/consumidor.png" alt="Consumidor" />
                </button>
              </div>
              <div className="container-perfil col-6 d-flex justify-content-center">
                <button 
                  type="button" 
                  onClick={() => navigate('/cadastroProdutor1')} 
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  <img src="public/assets/images/produtor.png" alt="Produtor" />
                </button>
              </div>
            </div>

            <div className="container-botton d-flex justify-content-center py-4">
              <p className="container-text mb-0">
                JÁ TEM UMA CONTA? <a href="/login" className="bg fw-bold">ENTRE AQUI</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;