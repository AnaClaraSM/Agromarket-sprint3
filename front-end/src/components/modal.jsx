import React, { useState } from "react";
import styled from "styled-components";
import { useSnackbar } from "notistack";

const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const ConfirmButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const Modal = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const { enqueueSnackbar } = useSnackbar();

  if (!product) return null;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleConfirmOrder = () => {
    enqueueSnackbar("Pedido confirmado!", { variant: "success" });
    onClose();
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <ModalContainer isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✖</CloseButton>

        <h2>{product.name}</h2>
        <p>Produtor: {product.producer}</p>
        <p>Preço unitário: R$ {product.price.toFixed(2)}</p>

        <QuantityContainer>
          <button onClick={handleDecrement} disabled={quantity === 1}>
            -
          </button>
          <span>Quantidade: {quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </QuantityContainer>

        <p>Preço total: R$ {totalPrice}</p>

        <ImageContainer>
          <img src={product.image} alt={product.name} />
        </ImageContainer>

        <ConfirmButton onClick={handleConfirmOrder}>Confirmar Pedido</ConfirmButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
