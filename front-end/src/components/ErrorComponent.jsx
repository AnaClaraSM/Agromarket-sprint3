import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin: 20px 0;

  h3 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
  }

  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #f5c6cb;
    color: #721c24;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #f1b0b7;
    }
  }
`;

const ErrorComponent = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <h3>Algo deu errado!</h3>
      <p>{message}</p>
      {onRetry && <button onClick={onRetry}>Clique aqui para tentar novamente</button>}
    </ErrorContainer>
  );
};

export default ErrorComponent;
