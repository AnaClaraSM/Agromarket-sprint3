// CadastroProdutor2.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledCadastro } from "../../styled";

function CadastroProdutor2() {
  const [formData, setFormData] = useState({
    nomeFantasia: "",
    tamanhoPropriedade: "",
    cep: "",
    estado: "",
    cnpj: "",
    tipoProducao: "",
    cidade: "",
    pais: "",
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
    navigate("/compras"); // Navega para a página de compras
  };

  return (
    <StyledCadastro>
      <div className="cadastro">
        <header className="d-flex justify-content-center">
          <img clasName="logo-img" src="public\assets\images\logo.png" alt="" />
          <div className="logo-text">AGROMARKET</div>
        </header>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="card">
            <h2 className="text-center container-cadastro">CADASTRO</h2>
            <p className="text-center container-bg">PRODUTOR</p>

            <form onSubmit={validarFormulario} className="form-group">
              <div className="row">
                {/* Nome Fantasia */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">NOME FANTASIA</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="nomeFantasia"
                    value={formData.nomeFantasia}
                    onChange={handleChange}
                  />
                </div>

                {/* Tamanho da Propriedade */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">TAMANHO DA PROPRIEDADE</label>
                  <select
                    className="form-control input-color"
                    name="tamanhoPropriedade"
                    value={formData.tamanhoPropriedade}
                    onChange={handleChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="Pequena">Pequena (&lt; 10 hectares)</option>
                    <option value="Média">Média (10-50 hectares)</option>
                    <option value="Grande">Grande (&gt; 50 hectares)</option>
                  </select>
                </div>

                {/* CEP */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">CEP</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                  />
                </div>

                {/* Estado */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">ESTADO</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                  />
                </div>

                {/* CNPJ */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">CNPJ</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                  />
                </div>

                {/* Tipo de Produção */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">TIPO DE PRODUÇÃO</label>
                  <select
                    className="form-control input-color"
                    name="tipoProducao"
                    value={formData.tipoProducao}
                    onChange={handleChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="Agricultura">Agricultura</option>
                    <option value="Pecuária">Pecuária</option>
                    <option value="Agricultura Orgânica">Agricultura Orgânica</option>
                    <option value="Produção Agroflorestal">Produção Agroflorestal</option>
                    <option value="Apicultura">Apicultura</option>
                    <option value="Aquicultura">Aquicultura</option>
                    <option value="Hortifrúti">Hortifrúti</option>
                    <option value="Avicultura">Avicultura</option>
                    <option value="Grãos">Grãos</option>
                  </select>
                </div>

                {/* Cidade */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">CIDADE</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                  />
                </div>

                {/* País */}
                <div className="col-3">
                  <label className="form-label mt-4 fw-semibold">PAÍS</label>
                  <input
                    type="text"
                    className="form-control input-color"
                    name="pais"
                    value={formData.pais}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mt-3 pt-5 d-flex justify-content-between">
                <button
                  onClick={() => navigate("/cadastroProdutor1")}
                  type="button"
                  className="form-control btn btn-info m-3 cadastro-btn col-6"
                >
                  VOLTAR
                </button>
                <button type="submit" className="form-control btn btn-info m-3 cadastro-btn col-6">
                  FINALIZAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledCadastro>
  );
}

export default CadastroProdutor2;
