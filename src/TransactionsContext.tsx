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

// herdara todos os campos menos o id e o createdAt
type TransactionInput = Omit<Transaction, "id" | "createdAt">;
// outra alternativa
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

 // ReactNode = tipagem geral para children (componentes inteiros internos)
 interface TransactionsProviderProps {
  children: ReactNode; // aceitar qualquer tipo de conteudo valido para o react
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

 // argumento = valor default []
 export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

// recebe todos os children e disponibiliza dados
 export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // search api (once)
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data; // salvando os dados de transação que ficam no axios

    // adicionando o novo input ao state de transações
    // principio da imutabilidade não alteramos diretamente o array e sim criamos um novo a partir do antigo
    setTransactions([...transactions, transaction]);
  }

  // quem providencia os dados do contexto para todos os children
  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}