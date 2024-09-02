import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContextAPI, ProdutosProps } from "../../api/contextApi"
import { api } from "../../api/services"
import { BsCartPlus } from "react-icons/bs";


export default function Produto(){
    const {id} = useParams()
    const [produto, setProduto] = useState<ProdutosProps>()
    const {addProduto, addCarrinho} = useContext(ContextAPI)

    useEffect(()=>{
        async function carregaAPI(){
            const response = await api.get(`/products/${id}`)
            setProduto(response.data)
        }

        carregaAPI()        
    },[])


    return(
        <>
        <img src={produto?.cover} alt="" />
        <h1>{produto?.title}</h1>
        <p>{produto?.description}</p>
        <div className="flex items-center gap-2">
                        <strong>{produto?.price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'} )}</strong>
                        <button onClick={()=>addCarrinho} className="bg-black text-white p-[5px] rounded-md hover:bg-gray-700 transition-all ease-in-out duration-200"><BsCartPlus /></button>
                    </div>
        <strong>{produto?.price.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}</strong>
        </>
    )
}