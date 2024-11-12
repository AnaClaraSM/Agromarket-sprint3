import React, { useEffect, useState } from "react";
import { StyledComprasProdutores } from "../styled";
import SectionBar from "./SectionBar";
import ErrorComponent from "./ErrorComponent";
import produtoresDataJsonReservado from "../helper/produtores-data-reserva.json";

const ComprasProdutores = () => {
  const [produtores, setProdutores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/produtores")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProdutores(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>carregando produtores...</p>;
  if (error && produtores.length === 0) {
    // Essa validação só está sendo feita por precaução caso o não de para hospedar o back-end
    return (
      <ErrorComponent
        onRetry={() => {
          setProdutores(produtoresDataJsonReservado);
        }}
      />
    );
  }

  // Agrupa produtores em colunas de 2
  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  const produtorColumns = chunkArray(produtores, 2);

  return (
    <StyledComprasProdutores>
      {/* Seção Produtos */}
      <section className="produtores" id="produtores">
        {/* <!-- Cabeçalho --> */}
        <div className="section-header">
          <h2>Produtores Populares</h2>
          <p>Conheça os produtores que têm se destacado com produtos de altíssima qualidade!</p>
        </div>
        {/* <!-- Cards --> */}
        <div className="container-produtores">
          {/* <!-- Coluna 1 --> */}
          {produtorColumns.map((column, columnIndex) => (
            <React.Fragment key={columnIndex}>
              <div className="coluna-produtor">
                {/* <!-- Produtor 1 --> */}
                {column.map((produtor, index) => (
                  <div key={index} className="card-produtor">
                    <img
                      className="img-produtor"
                      src={`./assets/images/produtor${index + 1}.png`}
                      alt={produtor.nome_fantasia}
                    />
                    <div className="texto-produtor">
                      <h3>{produtor.nome_fantasia}</h3>
                      <p>{produtor.tipo_producao}</p>
                      <div className="stars">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star-half"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {columnIndex < produtorColumns.length - 1 && <div className="column-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </section>
    </StyledComprasProdutores>
  );
};

export default ComprasProdutores;
