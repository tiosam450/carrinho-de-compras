import { createContext, ReactNode, useState } from "react";

interface CarrinhoProps{
    carrinho: ProdutoProps[]
    qtdCarrinho: number
}

interface ProdutoProps{
    id: number
    title: string
    description: string
    price: number
    cover: string
    amount: number
}

interface ConteudoProps{
    children: ReactNode
}

export const ContextAPI = createContext({} as CarrinhoProps)


function APIprovider({children}: ConteudoProps){
   
    const [carrinho, setCarrinho] = useState<ProdutoProps[]>([])
   
    return(
       <ContextAPI.Provider value={{
        carrinho,
        qtdCarrinho: carrinho.length
        }}>

        {children}

       </ContextAPI.Provider> 
    )
}

export default APIprovider