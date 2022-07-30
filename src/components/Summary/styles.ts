import styled from "styled-components";

export const Container = styled.div`
  display: grid;// pois temos itens do mesmo tamanho, poderia usar o flex tb
  grid-template-columns: repeat(3, 1fr); // 3 colunas de tamanho iguais
  gap: 2rem;// espaçamento entre cada item do grid
  margin-top: -10rem; // de onde vai começar o grid 
  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    header {
      display: flex;
      align-items: center; 
      justify-content: space-between; // espaço iguais entre os itens
    }
    strong {
      display: block; // block para que o margin top funcione, pois ele vem com padrão aling
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    // usando classesName do componente html
    &.highlight-background {
      background: var(--green);
      color: var(--white);
    }
  }
`;