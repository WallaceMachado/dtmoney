import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {    
    useEffect(() => {
        api.get("transactions")
           .then((reponse) => console.log(reponse.data));
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