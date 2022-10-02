import React from "react";
import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from "../services/api";

interface Transaction {
    id: number;
    titulo: string;
    valor: number;
    type: string;
    categoria: string;
    createdAt: string;

}

interface TransactionProviderProps {
    children: React.ReactNode;
}

// interface TransactionInput {
//     id: number;
//     titulo: string;
//     valor: number;
//     type: string;
//     categoria: string;

// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; 

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;

}


const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {


    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));  
    }, [])

    async function createTransaction(transaction: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transaction,
            createdAt: new Date(),
        })
        const { transaction: transactionCreated } = response.data;

        setTransactions([...transactions, transactionCreated]);
    }

    
    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = React.useContext(TransactionsContext);

    return context;
}



