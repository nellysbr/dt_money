import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionsTable } from './components/TransactionsTable';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';

import { NewTransactionModal } from './components/NewTransactionModal';

// const Title = styled.h1`
//   color: #8257e6;
//   font-size: 64px;

//   button{
//      border-radius: 8px;
//      background-color: #8257e6;
//   }
//   button:hover{
//     background-color: #fff;
//     color: black;  
//   }
// `

Modal.setAppElement('#root');


export function App() {

  const [isNewTransactionModalOpen, setNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
      setNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
      setNewTransactionModal(false);
  }


  return (
    <>
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
                    
               
      <TransactionsTable />
      <GlobalStyle />

      
      
    </>
  );
}


