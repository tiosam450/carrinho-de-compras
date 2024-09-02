import { createContext, ReactNode, useState } from "react";
import toast from "react-hot-toast";

export interface ProdutosProps {
    id: number
    cover: string
    description: string
    price: number
    title: string
    qtd: number
    amount: number
    total: number
}

interface CarrinhoProps {
    carrinho: ProdutosProps[]
    qtdCarrinho: number
    addCarrinho: (novoItem: ProdutosProps) => void
    deleta: (produto: ProdutosProps) => void
    delProduto: (produto: ProdutosProps) => void
    addProduto: (produto: ProdutosProps) => void
    total: string
}

interface ConteudoProps {
    children: ReactNode
}

export const ContextAPI = createContext({} as CarrinhoProps)


export const APIprovider = ({ children }: ConteudoProps) => {

    const [carrinho, setCarrinho] = useState<ProdutosProps[]>([])
    const [total, setTotal] = useState('')

    function addCarrinho(novoItem: ProdutosProps) {
        // Verifica se o item já está no carrinho
        const indexProduto = carrinho.findIndex(item => item.id == novoItem.id)

        if (indexProduto == -1) {
            let dados = {
                ...novoItem,
                amount: 1,
                total: novoItem.price
            }
            setCarrinho([...carrinho, dados])
            totalGeral([...carrinho, dados])
        }
        toast.success('Adicionado com sucesso!')

    }

    function addProduto(novoItem: ProdutosProps) {
        // Verifica se o item já está no carrinho
        let carrinhoTemp = carrinho
        const indexProduto = carrinho.findIndex(item => item.id == novoItem.id)
        carrinhoTemp[indexProduto].amount += 1
        carrinhoTemp[indexProduto].total = carrinhoTemp[indexProduto].price * carrinhoTemp[indexProduto].amount

        setCarrinho(carrinhoTemp)
        totalGeral(carrinhoTemp)
    }

    function deleta(produto: ProdutosProps) {
        const listaTemp = carrinho.filter(item => item.id !== produto.id)
        setCarrinho(listaTemp)
        totalGeral(listaTemp)
    }


    function delProduto(produto: ProdutosProps) {
        const indexProduto = carrinho.findIndex(item => item.id == produto.id)

        if (carrinho[indexProduto].amount > 1) {
            let carrinhoTemp = carrinho
            carrinhoTemp[indexProduto].amount -= 1
            carrinhoTemp[indexProduto].total = carrinhoTemp[indexProduto].price * carrinhoTemp[indexProduto].amount
            setCarrinho(carrinhoTemp)
            totalGeral(carrinhoTemp)
        }
    }

    function totalGeral (itens:ProdutosProps[]){
        let listaprodutos = itens
        let soma = listaprodutos.reduce((acumuladior, item)=>(
            acumuladior + item.total
        ), 0)
        const formataValor = soma.toLocaleString('pt-BR', {style: "currency", currency:'BRL'})
        setTotal(formataValor)
    }

    return (
        <ContextAPI.Provider value={{
            carrinho,
            qtdCarrinho: carrinho.length,
            addCarrinho,
            addProduto,
            deleta,
            delProduto,
            total
        }}>

            {children}

        </ContextAPI.Provider>
    )
}

