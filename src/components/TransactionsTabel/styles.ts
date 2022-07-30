import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%; // ocupar toda a largura
    border-spacing: 0 0.5rem; // espaço entre os itens da coluna
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
      &:first-child { // rimeiro item da tabela
        color: var(--text-title);
      }
      &.deposit { // usando classesName do componente html
        color: var(--green);
      }
      &.withdraw { // usando classesName do componente html
        color: var(--red);
      }
    }
  }
`;