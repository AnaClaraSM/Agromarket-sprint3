// CadastroProdutor2.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastroProdutor2() {
  const [formData, setFormData] = useState({
    nomeFantasia: '',
    tamanhoPropriedade: '',
    cep: '',
    estado: '',
    cnpj: '',
    tipoProducao: '',
    cidade: '',
    pais: '',
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
    const { nomeFantasia, tamanhoPropriedade, cep, estado, cnpj, tipoProducao, cidade, pais } = formData;

    // Validação de campos vazios
    if (!nomeFantasia || !tamanhoPropriedade || !cep || !estado || !cnpj || !tipoProducao || !cidade || !pais) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Cadastro finalizado com sucesso!");
    navigate('/compras'); // Navega para a página de compras
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card px-5">
        <h2 className="text-center container-login">CADASTRO</h2>
        <p className="text-center containe-bg">PRODUTOR</p>
        <form onSubmit={validarFormulario} className="form-group">
          <div className="row pt-3">
            {/* Nome Fantasia */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">NOME FANTASIA</label>
              <input type="text" className="form-control input-color p-3" name="nomeFantasia" value={formData.nomeFantasia} onChange={handleChange} />
            </div>

            {/* Tamanho da Propriedade */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">TAMANHO DA PROPRIEDADE</label>
              <input type="text" className="form-control input-color p-3" name="tamanhoPropriedade" value={formData.tamanhoPropriedade} onChange={handleChange} />
            </div>

            {/* CEP */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">CEP</label>
              <input type="text" className="form-control input-color p-3" name="cep" value={formData.cep} onChange={handleChange} />
            </div>

            {/* Estado */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">ESTADO</label>
              <input type="text" className="form-control input-color p-3" name="estado" value={formData.estado} onChange={handleChange} />
            </div>

            {/* CNPJ */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">CNPJ</label>
              <input type="text" className="form-control input-color p-3" name="cnpj" value={formData.cnpj} onChange={handleChange} />
            </div>

            {/* Tipo de Produção */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">TIPO DE PRODUÇÃO</label>
              <input type="text" className="form-control input-color p-3" name="tipoProducao" value={formData.tipoProducao} onChange={handleChange} />
            </div>

            {/* Cidade */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">CIDADE</label>
              <input type="text" className="form-control input-color p-3" name="cidade" value={formData.cidade} onChange={handleChange} />
            </div>

            {/* País */}
            <div className="col-3">
              <label className="form-label mt-4 fw-semibold">PAÍS</label>
              <input type="text" className="form-control input-color p-3" name="pais" value={formData.pais} onChange={handleChange} />
            </div>
          </div>

          <div className="row pt-5">
            <button type="submit" className="form-control btn btn-info mt-3" style={{ width: 250, height: 50, borderRadius: 40 }}>
              FINALIZAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroProdutor2;