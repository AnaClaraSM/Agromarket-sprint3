// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLogin } from '../../styled';
// import '../styles/login.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', senha: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validarLogin = (e) => {
        e.preventDefault();
        const { email, senha } = formData;

        if (email.trim() === '' || senha.trim() === '') {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Sucesso no login
        alert("Login realizado com sucesso!");
        navigate('/compras'); // Redireciona para a página de compras
    };

    return (
        <StyledLogin>
            <div className="login">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="card">
                        <form className="form-group" onSubmit={validarLogin}>
                            <div className="mb-3 bg p-5 rounded">
                                <h2 className="text-center container-login">LOGIN</h2>
                                <p className="text-center containe-bg">BEM-VINDO DE VOLTA</p>

                                <label className="form-label mt-4 fw-semibold">EMAIL</label>
                                <input
                                    type="email"
                                    className="form-control input-color"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                />

                                <label className="form-label mt-3 fw-semibold">SENHA</label>
                                <input
                                    type="password"
                                    className="form-control input-color"
                                    name="senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                />

                                <div className="pb-4">
                                    <a href="#!" className="text-muted containe-bg">ESQUECI MINHA SENHA</a>
                                </div>

                                <div className="d-flex btn-color justify-content-center">
                                    <button
                                        className="form-control bnt-color mt-3 btn btn-info btn-block btn-lg"
                                        type="submit"
                                        style={{ width: '250px', height: '50px', borderRadius: '40px' }}
                                    >
                                        ENTRAR
                                    </button>
                                </div>

                                <div className="container-botton py-4 d-flex justify-content-center">
                                    <p className="mb-0">
                                        AINDA NÃO TEM CONTA? <a href="/registro" className="bg fw-bold">CADASTRE-SE AQUI</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StyledLogin>
    );
};

export default Login;