import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledCadastro } from "../../styled";

function CadastroProdutor1() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: "",
    rg: "",
    telefone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  const validarFormulario = (e) => {
    e.preventDefault();
    const { nomeCompleto, cpf, email, senha, confirmarSenha, dataNascimento, rg, telefone } = formData;

    // Validação de campos vazios
    if (!nomeCompleto || !cpf || !email || !senha || !confirmarSenha || !dataNascimento || !rg || !telefone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Validação de senha e confirmação de senha
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return;
    }

    // Validação de idade mínima (18 anos)
    if (calcularIdade(dataNascimento) < 18) {
      alert("Você deve ter pelo menos 18 anos para se registrar.");
      return;
    }
    navigate("/cadastroProdutor2");
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
            <h2 className="text-center container-cadastro">CADASTRO</h2>
            <p className="text-center container-bg">PRODUTOR</p>

            <form onSubmit={validarFormulario} className="form-group">
              {/* pt-3 */}
              <div className="row">
                {/* Nome Completo */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">NOME COMPLETO</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                  />
                </div>

                {/* CPF */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">CPF</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">EMAIL</label>
                  <input
                    type="email"
                    className="form-control input-color"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Senha */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">SENHA</label>
                  <input
                    type="password"
                    className="form-control input-color"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                  />
                </div>

                {/* Data de Nascimento */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">DATA DE NASCIMENTO</label>
                  <input
                    type="date"
                    className="form-control input-color"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                  />
                </div>

                {/* RG */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">RG</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="rg"
                    value={formData.rg}
                    onChange={handleChange}
                  />
                </div>

                {/* Telefone */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">TELEFONE</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>

                {/* Confirmar Senha */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">CONFIRME A SENHA</label>
                  <input
                    type="password"
                    className="form-control input-color"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mt-3 pt-5 d-flex justify-content-between">
                <button onClick={handleSair} type="button" className="form-control btn btn-info m-3 cadastro-btn col-6">
                  SAIR
                </button>
                <button type="submit" className="form-control btn btn-info m-3 cadastro-btn col-6">
                  CONTINUAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledCadastro>
  );
}

export default CadastroProdutor1;
