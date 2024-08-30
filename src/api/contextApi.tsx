import { createContext, ReactNode, useState } from "react";
import { ProdutosProps } from "../paginas/home";

interface CarrinhoProps {
    carrinho: ProdutosProps[]
    qtdCarrinho: number
    addCarrinho: (item: ProdutosProps) => void

}


interface ConteudoProps {
    children: ReactNode
}

export const ContextAPI = createContext({} as CarrinhoProps)


function APIprovider({ children }: ConteudoProps) {

    const [carrinho, setCarrinho] = useState<ProdutosProps[]>([])

    function addCarrinho(item: ProdutosProps) {


        console.log(item)
    }

    return (
        <ContextAPI.Provider value={{
            carrinho,
            qtdCarrinho: carrinho.length,
            addCarrinho
        }}>

            {children}

        </ContextAPI.Provider>
    )
}

export default APIprovider