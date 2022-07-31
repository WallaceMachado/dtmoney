import styled from 'styled-components';
import { darken } from "polished"; // yarn add polished

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    // estilização do texto placeholder
    &::placeholder {
      color: var(--text-body);
    }
    // hack -> todo input que há input antes terá um espaço entre
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {// quando passar o mouse por cima do botão
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;
    // escurece 10% do cinza somente a borda se o usase o filtro iria escurer o botão todo
    &:hover {
      border-color: ${darken(0.1, "#d7d7d7")}; // necessário instalar add polished
    }
    img {
      width: 20px;
      height: 20px;
    }
    span {
      display: inline-block;// para dar um margem nele
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
  }
`;