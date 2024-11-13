import React, { useState } from "react";
import { StyledComprasProdutos } from "../styled";
import SectionBar from "./SectionBar";
import Modal from "./Modal";

const ComprasProdutos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { name: "Maçã Verde - UN", producer: "João Menezes", price: 1.3, image: "./assets/images/produto1.png" },
    { name: "Maçã Gala - UN", producer: "Fazenda da Vovó Joana", price: 0.82, image: "./assets/images/produto2.png" },
    { name: "Alface Americana - UN", producer: "Farm House", price: 2.0, image: "./assets/images/produto3.png" },
    { name: "Ovos - Dúzia", producer: "Avícula Dummont", price: 7.35, image: "./assets/images/produto4.png" },
    { name: "Filé Mignon - KG", producer: "João Menezes", price: 83.6, image: "./assets/images/produto5.png" },
    { name: "Tilápia - PÇ", producer: "Farmers", price: 11.15, image: "./assets/images/produto6.png" },
    { name: "Pistache - KG", producer: "Wind Mill", price: 86.35, image: "./assets/images/produto7.png" },
    { name: "Amêndoa Crua sem Casca - KG", producer: "Wind Mill", price: 50.6, image: "./assets/images/produto8.png" },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <StyledComprasProdutos>
      {/* Seção Produtos */}
      <section className="produtos" id="produtos">
        {/* <!-- Cabeçalho --> */}
        <div className="section-header">
          <h2>Produtos em Destaque</h2>
          <p>Confira os produtos que estão conquistando o paladar de nossos clientes!</p>
        </div>
        {/* <!-- Cards --> */}
        <div className="container-produtos">
          {products.map((product, index) => (
            <div key={index} className="card-produto" onClick={() => handleCardClick(product)}>
              <div className="img-produto">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="nome-produto">
                <h3>{product.name}</h3>
              </div>
              <div className="produtor-produto">
                <h4>{product.producer}</h4>
              </div>
              <div className="preco-produto">
                <i className="bx bx-cart-alt" id="cart-icon"></i> R$ {product.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <SectionBar />
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} />
    </StyledComprasProdutos>
  );
};

export default ComprasProdutos;
