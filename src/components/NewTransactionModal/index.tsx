import Modal from "react-modal";
import { FormEvent, useState } from "react";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
  }
export function NewTransactionModal({
    isOpen,
    onRequestClose,
  }: NewTransactionModalProps) {
    const [type, setType] = useState("deposit");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState("");

    // event : formEvent é enviado automaticamente pelo sonSubmit de um form
    // ele recarrega toda a pagina apos submeter os dados
    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault(); // previnir o evento padrão e não recarregar automaticamente a pagina
    
        console.log(title, value, category, type);
      }

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay" //somente se quiser sobreescrever fotmação padrão do modal
        className="react-modal-content" //somente se quiser sobreescrever fotmação padrão do modal

        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={(event) => setValue(Number(event.target.value))}//sempre etorna sring então precisamos converter pra numero
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {
                        setType("deposit");
                        }}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => {
                        setType("withdraw");
                        }}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}