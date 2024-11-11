import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastroProdutor1() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: '',
    rg: '',
    telefone: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

    alert("Cadastro realizado com sucesso!");
    navigate('/cadastroProdutor2'); // Navega para a segunda página
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card px-5">
        <h2 className="text-center container-login">CADASTRO</h2>
        <p className="text-center containe-bg">PRODUTOR</p>
        <form onSubmit={validarFormulario} className="form-group">
          <div className="row pt-3">
            {/* Nome Completo */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">NOME COMPLETO</label>
              <input type="text" className="form-control input-color p-3" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} />
            </div>

            {/* CPF */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">CPF</label>
              <input type="text" className="form-control input-color p-3" name="cpf" value={formData.cpf} onChange={handleChange} />
            </div>

            {/* Email */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">EMAIL</label>
              <input type="email" className="form-control input-color p-3" name="email" value={formData.email} onChange={handleChange} />
            </div>

            {/* Senha */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">SENHA</label>
              <input type="password" className="form-control input-color p-3" name="senha" value={formData.senha} onChange={handleChange} />
            </div>

            {/* Data de Nascimento */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">DATA DE NASCIMENTO</label>
              <input type="date" className="form-control input-color p-3" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
            </div>

            {/* RG */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">RG</label>
              <input type="text" className="form-control input-color p-3" name="rg" value={formData.rg} onChange={handleChange} />
            </div>

            {/* Telefone */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">TELEFONE</label>
              <input type="text" className="form-control input-color p-3" name="telefone" value={formData.telefone} onChange={handleChange} />
            </div>

            {/* Confirmar Senha */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">CONFIRME A SENHA</label>
              <input type="password" className="form-control input-color p-3" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} />
            </div>
          </div>

          <div className="row pt-5">
            <button type="submit" className="form-control btn btn-info mt-3" style={{ width: 250, height: 50, borderRadius: 40 }}>
              CONTINUAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroProdutor1;