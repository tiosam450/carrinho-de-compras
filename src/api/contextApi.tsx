import { createContext, ReactNode, useState } from "react";

export interface ProdutosProps{
    id: number
    cover: string
    description: string
    price: number
    title: string
    qtd: number
    amount: number
    total: number
}

interface CarrinhoProps{
    carrinho: ProdutosProps[]
    qtdCarrinho: number
    addCarrinho: (novoItem: ProdutosProps)=> void

}

interface ConteudoProps{
    children: ReactNode
}

export const ContextAPI = createContext({} as CarrinhoProps)


export const APIprovider = ({children}: ConteudoProps)=>{
   
    const [carrinho, setCarrinho] = useState<ProdutosProps[]>([])

    function addCarrinho(novoItem:ProdutosProps){
        console.log(novoItem)
        // Verifica se o item já está no carrinho
        const indexProduto = carrinho.findIndex(item => item.id == novoItem.id)

        if(indexProduto !== -1){
            let carrinhoTemp = carrinho
            carrinhoTemp[indexProduto].amount += 1
            // carrinhoTemp[indexProduto].total = carrinhoTemp[indexProduto].price * carrinhoTemp[indexProduto].amount   
            
            setCarrinho(carrinhoTemp)
            return
        }

        let dados = {
            ...novoItem,
            amount: 1,
            total: novoItem.price
        }

        setCarrinho(produtos =>[...produtos, dados])
    }
   
    return(
       <ContextAPI.Provider value={{
        carrinho,
        qtdCarrinho: carrinho.length,
        addCarrinho,
        }}>

        {children}

       </ContextAPI.Provider> 
    )
}

