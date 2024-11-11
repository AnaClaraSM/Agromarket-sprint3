import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCadastro } from '../../styled';


const CadastroConsumidor = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validarFormulario = (e) => {
        e.preventDefault();
        const { nome, email, senha, confirmarSenha } = formData;
        if (!nome || !email || !senha || !confirmarSenha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem. Por favor, verifique.");
            return;
        }

        alert("Cadastro realizado com sucesso!");
        navigate('/compras');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card px-5">
                <header className="d-flex justify-content-center">
                    <img src="../img/logo.png" alt="Logo Agromarket" />
                    <div className="header-title mt-4">AGROMARKET</div>
                </header>
                <div className="pt-5">
                    <h2 className="text-center container-login">CADASTRO</h2>
                    <p className="text-center containe-bg">CONSUMIDOR</p>
                </div>

                <form className="form-group" onSubmit={validarFormulario}>
                    <div className="row pt-3">
                        <div className="col-6">
                            <label className="form-label mt-4 fw-semibold">NOME COMPLETO</label>
                            <input
                                type="text"
                                className="form-control input-color p-3"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-6">
                            <label className="form-label mt-4 fw-semibold">EMAIL</label>
                            <input
                                type="email"
                                className="form-control input-color p-3"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-6">
                            <label className="form-label mt-4 fw-semibold">SENHA</label>
                            <input
                                type="password"
                                className="form-control input-color p-3"
                                name="senha"
                                value={formData.senha}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-6">
                            <label className="form-label mt-4 fw-semibold">CONFIRME A SENHA</label>
                            <input
                                type="password"
                                className="form-control input-color p-3"
                                name="confirmarSenha"
                                value={formData.confirmarSenha}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="d-flex btn-color d-flex justify-content-center pt-5">
                        <button
                            className="form-control bnt-color mt-3 btn btn-info btn-block btn-lg"
                            type="submit"
                            style={{ width: '250px', height: '50px', borderRadius: '40px' }}
                        >
                            CADASTRAR
                        </button>
                    </div>
                    <div className="container-botton py-4 d-flex justify-content-center">
                        <p className="mb-0 bg">
                            JÁ TEM UMA CONTA? <a href="/login" className="bg fw-bold">ENTRE AQUI</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastroConsumidor;