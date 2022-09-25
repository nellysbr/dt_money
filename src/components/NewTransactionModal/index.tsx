import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState, useEffect } from "react";


interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: newTransactionModalProps) {

    const [type, setType] = useState('deposit');
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState(0);
    const [categoria, setCategoria] = useState('');

    useEffect(() => {

        setTitulo(`${titulo}`);
        setValor(valor);
        setCategoria(`${categoria}`);
   
    }, [titulo, valor, categoria]);
    



    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault();

        console.log({titulo, valor, categoria, type});

    };
    

  
    return (

        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="modal-content" >

                <button type="button">
                    <img src={closeImg} alt="Fechar modal" onClick={onRequestClose} className="btnFecharModal" />
                </button>
                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>cadastrar transação</h2>

                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Titulo" />
                    <input type="text" value={valor} onChange={e => setValor(Number(e.target.value))} placeholder="Valor" />
                    <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} placeholder="Categoria" />

                    <TransactionTypeContainer>
                        <RadioBox 
                            type="button"
                            onClick={() => {setType('deposit'); }}
                            isActive={type === 'deposit'}
                            activeColor='green'>
                        
                                <img src={incomeImg} alt="entrada" />
                                <span>Entrada</span>
                        </RadioBox>

                        <RadioBox 
                            type="button" 
                            onClick={() => {setType('withdraw'); }}
                            isActive={type === 'withdraw'}
                            activeColor='red'>

                                <img src={outcomeImg} alt="saida" />
                                <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <button type="submit">Cadastrar</button>

                </Container>
                
        </Modal>
            
    );
};