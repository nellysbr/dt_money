import { Container } from "./styles";
import Modal from 'react-modal';


interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: newTransactionModalProps) {
    

  
    return (

        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="modal-content" >
                <Container>
                    <h2>cadastrar transação</h2>

                    <input type="text" placeholder="Titulo" />
                    <input type="number" placeholder="Valor" />
                    <input type="text" placeholder="Categoria" />

                    <button type="submit">Cadastrar</button>

                </Container>
                
        </Modal>
            
    );
};