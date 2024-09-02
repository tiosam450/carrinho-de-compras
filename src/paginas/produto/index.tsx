import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContextAPI, ProdutosProps } from "../../api/contextApi"
import { api } from "../../api/services"
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Produto() {
    const { id } = useParams()
    const [produto, setProduto] = useState<ProdutosProps>()
    const { addCarrinho } = useContext(ContextAPI)

    useEffect(() => {
        async function carregaAPI() {
            const response = await api.get(`/products/${id}`)
            setProduto(response.data)
        }

        carregaAPI()
    }, [])

    function adicionaProduto(produto: any) {
        addCarrinho(produto)
    }

    return (
        <section className="w-full flex flex-col justify-center items-center p-[20px]">
            <div className="w-[90%] max-w-[1200px] flex flex-col md:flex-row">
                <img src={produto?.cover} alt="" className="w-full max-w-[600px] max-h-[600px] mr-[60px]" />
                <div>
                    <h1 className="text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-bold my-8">{produto?.title}</h1>
                    <p>{produto?.description}</p>
                    <div className="flex items-center gap-2">
                        <strong className="text-[1.6rem] my-8">{produto?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                        <button onClick={() => adicionaProduto(produto)} className="bg-black text-white p-[5px] rounded-md hover:bg-gray-700 transition-all ease-in-out duration-200"><BsCartPlus /></button>
                    </div>
                    <Link to='/'><button className="bg-black text-white p-[5px] px-[15px] rounded-md hover:bg-gray-700 transition-all ease-in-out duration-200">Voltar</button></Link>
                </div>
            </div>
        </section>
    )
}