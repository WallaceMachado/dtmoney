import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">  
       <h1>Hello World</h1>
       <GlobalStyle />
    </div>
  );
}
// remover export default pois exportando assim o nome poderá ser alterado
// por quem chamar a função
// export default App;
