import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

//create server
import { createServer, Model } from 'miragejs';


createServer({

  models: {

    transaction: Model,

  },

  seeds(server) { //serve para popular o banco de dados com dados iniciais
    server.db.loadData({
      transactions: [{
        id: 1,
        titulo: 'Freelance de website',
        type: 'deposit',
        categoria: 'Dev',
        valor: 6000,
        createdAt: new Date('2021-02-12 09:00:00'),
      },
      {
        id: 2,
        titulo: 'Aluguel',
        type: 'withdraw',
        categoria: 'Casa',
        valor: 1100,
        createdAt: new Date('2021-02-14 11:00:00'),
      }]
    });

  },
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
