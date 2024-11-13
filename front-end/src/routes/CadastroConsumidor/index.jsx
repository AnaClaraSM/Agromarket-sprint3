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

    const handleSair = () => {
        navigate("/registro");
    };

    return (
        <StyledCadastro>
            <div className="cadastro">
                <header className="d-flex justify-content-center">
                    <img clasName="logo-img" src="public\assets\images\logo.png" alt="" />
                    <div className="logo-text">AGROMARKET</div>
                </header>
                <div className="container d-flex justify-content-center align-items-center">
                    {/*  px-5 */}
                    <div className="card">
                        <div className="">
                            <h2 className="text-center container-cadastro">CADASTRO</h2>
                            <p className="text-center container-bg">CONSUMIDOR</p>
                        </div>

                        <form className="form-group" onSubmit={validarFormulario}>
                            {/* mt-4 */}
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label mt-4 fw-semibold">NOME COMPLETO</label>
                                    <input
                                        type="text"
                                        className="form-control input-color"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label mt-4 fw-semibold">EMAIL</label>
                                    <input
                                        type="email"
                                        className="form-control input-color"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label mt-3 fw-semibold">SENHA</label>
                                    <input
                                        type="password"
                                        className="form-control input-color"
                                        name="senha"
                                        value={formData.senha}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label mt-3 fw-semibold">CONFIRME A SENHA</label>
                                    <input
                                        type="password"
                                        className="form-control input-color"
                                        name="confirmarSenha"
                                        value={formData.confirmarSenha}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="d-flex btn-color d-flex justify-content-between pt-5">
                                <button onClick={handleSair}
                                    className="cadastro-btn form-control bnt-color mt-1 btn btn-info btn-block btn-lg cadastro-btn col-6"
                                    type="submit"
                                >
                                   SAIR
                                </button>
                                <button
                                    className="cadastro-btn form-control bnt-color mt-1 btn btn-info btn-block btn-lg cadastro-btn col-6"
                                    type="submit"
                                >
                                    CADASTRAR
                                </button>
                            </div>
                            <div className="container-botton mt-4 mb-2 d-flex justify-content-center">
                                <p className="mb-0 pb-0 bg login-text">
                                    JÁ TEM UMA CONTA? <a href="/login" className="bg fw-bold">ENTRE AQUI</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StyledCadastro>
    );
};

export default CadastroConsumidor;