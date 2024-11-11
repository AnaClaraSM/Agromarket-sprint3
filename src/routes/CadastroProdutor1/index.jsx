// CadastroProdutor1.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastroProdutor1() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    email: '',
    senha: '',
    dataNascimento: '',
    rg: '',
    telefone: '',
    confirmarSenha: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => field.trim() === '')) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    navigate('/cadastro-produtor-2'); // Navega para a segunda página
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card px-5">
        <h2 className="text-center container-login">CADASTRO</h2>
        <p className="text-center containe-bg">PRODUTOR</p>
        <form onSubmit={handleSubmit} className="form-group">
          <div className="row pt-3">
            {/* Nome Completo */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">NOME COMPLETO</label>
              <input type="text" className="form-control input-color p-3" name="nomeCompleto" onChange={handleChange} />
            </div>
            {/* CPF */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">CPF</label>
              <input type="text" className="form-control input-color p-3" name="cpf" onChange={handleChange} />
            </div>
            {/* Continue com os outros campos */}
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