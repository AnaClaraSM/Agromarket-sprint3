// Registro.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledRegistro } from '../../styled';

const Registro = () => {
    const navigate = useNavigate();

    return (
        <StyledRegistro>
            <div className="registro">
                <header className="d-flex justify-content-center">
                    <img clasName="logo-img" src="public\assets\images\logo.png" alt="" />
                    <div className="logo-text">AGROMARKET</div>
                </header>

                <div className="container d-flex justify-content-center align-items-center">
                    <div className="card">
                        <form className="form-group">
                            <div className="bg p-3 rounded">
                                <h2 className="text-center container-registro">CADASTRO</h2>

                                <p className="container-text text-center container-bg pb-3">QUAL É O SEU PERFIL?</p>

                                <div className="container-perfil row pb-2">
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

                                <div className="container-botton d-flex justify-content-center pt-4 pb-3">
                                    <p className="container-text mb-0 login-text">
                                        JÁ TEM UMA CONTA? <a href="/login" className="bg fw-bold">ENTRE AQUI</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StyledRegistro>
    );
};

export default Registro;