import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto; // centralizar
  padding: 2rem 1rem 12rem; // 1 rem = 1 font size do root do styles global
  display: flex; // alinhar verticalmente ao centro
  align-items: center; // alinhar verticalmente ao centro
  justify-content: space-between; // espaço padrão entre os conteudos do box
  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;// remover border do html
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s; // para o filter ser aplicado terá esse delay 
    &:hover {// quando passar o mouse por cima
      filter: brightness(0.9);
    }
  }
`;