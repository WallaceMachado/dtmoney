import { useState } from "react";
import Modal from "react-modal";// radd react-modal / @types/react-modal
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

// acessibilidade -> referenciar o elemento root alertando impossibilidade de acesso aos elementos abaixo do modal
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    // toda função executada a partir do usuário começar com handle
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>  
       <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
       <Dashboard />
       < NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      />        
       <GlobalStyle />
    </>
  );
}
// remover export default pois exportando assim o nome poderá ser alterado
// por quem chamar a função
// export default App;
