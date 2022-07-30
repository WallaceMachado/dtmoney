import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>  
       <Header />
       <Dashboard />
       <GlobalStyle />
    </>
  );
}
// remover export default pois exportando assim o nome poderá ser alterado
// por quem chamar a função
// export default App;
