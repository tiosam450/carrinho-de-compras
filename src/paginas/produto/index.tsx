import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProdutosProps } from "../../api/contextApi"
import { api } from "../../api/services"


export default function Produto(){
    const {id}= useParams()
    const [produto, setProduto] = useState<ProdutosProps[]>([])

    useEffect(()=>{
        async function carregaAPI(){
            const response = await api.get(`/products/${id}`)
            setProduto(response.data)
        }

        carregaAPI()

        
    },[])
    
    console.log(produto)
    return(
        <>
        <h1>Produto {id}</h1>
        </>
    )
}