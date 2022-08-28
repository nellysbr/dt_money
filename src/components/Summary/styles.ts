 import styled from 'styled-components';


 export const Container = styled.div`

    display: grid; // pq sao 3 itens, um do lado outro e de mesmo tamanho (melhor pra essas situacoes) teste ssh
    grid-template-columns: repeat(3, 1fr); // 3 colunas com 1 tamanho flexivel em todas elas - 1fr = 1 colunas
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-tile);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
    
        }

        strong {
            margin-top: 1rem;
            font-size: 1.5rem;
            line-height: 3rem;
            font-weight: 500;
            display: block;
        }

        &.highlight-background{
            background: var(--green);
        }
    }


        
 `;