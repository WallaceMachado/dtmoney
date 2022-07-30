import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {    
    useEffect(() => {
        fetch("http://localhost:3000/api/transactions")
          .then((response) => response.json())
          .then((data) => console.log(data));
      }, []);  
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>  
          <tbody>
              <tr>
                <td>Desenvolvimento</td>
                <td className="withdraw">- R$500,00</td>
                <td>Educação</td>
                <td>30/07/2022</td>
             </tr>    
             <tr>
                <td>Desenvolvimento</td>
                <td className="deposit">R$500,00</td>
                <td>Educação</td>
                <td>30/07/2022</td>
             </tr>  
             <tr>
                <td>Desenvolvimento</td>
                <td className="withdraw">- R$500,00</td>
                <td>Educação</td>
                <td>30/07/2022</td>
             </tr>    
             <tr>
                <td>Desenvolvimento</td>
                <td className="deposit">R$500,00</td>
                <td>Educação</td>
                <td>30/07/2022</td>
             </tr>          
          </tbody>
        </table>
      </Container>
    );
  }