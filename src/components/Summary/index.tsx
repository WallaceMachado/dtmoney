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
    
    return (
        <Container>
             <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          R$1000,00
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
         R$500,00
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Balance</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
         R$500,00
        </strong>
      </div>
        </Container>
    )
}