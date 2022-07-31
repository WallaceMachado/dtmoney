import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

 // ReactNode = tipagem geral para children (componentes inteiros internos)
 interface TransactionsProviderProps {
  children: ReactNode; // aceitar qualquer tipo de conteudo valido para o react
}

 // argumento = valor default []
 export const TransactionsContext = createContext<Transaction[]>([]);

// recebe todos os children e disponibiliza dados
 export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // search api (once)
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  // quem providencia os dados do contexto para todos os children
  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}