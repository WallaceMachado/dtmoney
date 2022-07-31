import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export function Summary() {
    // guardar dados do contexto em uma constante
    // usando contexto toda vez que os dados mudarem automaticamente quem usa o contexto será renderizado
    const {transactions }= useContext(TransactionsContext);
    console.log(transactions)

     // calcula saldo das transações e retorna valores do sumário
    const summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "deposit") {
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
        }

        // retorna acumulador com deposits, withdraws e total
        return acc;
      },
      {
        // valores iniciais
        deposits: 0,
        withdraws: 0,
        total: 0,
      }
    );
    
    return (
        <Container>
             <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Balance</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
        </Container>
    )
}