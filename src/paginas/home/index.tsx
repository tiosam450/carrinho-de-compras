import { useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../api/services";
import { ContextAPI } from "../../api/contextApi";
import { ProdutosProps } from "../../api/contextApi";


export default function Home(){
    const {addCarrinho} = useContext(ContextAPI)

    const [produtos, setProdutos] = useState<ProdutosProps[]>([])

    useEffect(()=>{
        async function carregaAPI(){
            const response = await api.get('/products')
            setProdutos(response.data)
        }

        carregaAPI()
        

    },[])

    function adicionaProduto(novoItem:ProdutosProps){
        addCarrinho(novoItem)
    }

    return(
        <section className="w-full flex flex-col justify-center items-center p-[20px]">
            <h1 className="text-[1.6rem] font-bold">Produtos em alta</h1>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 py-[60px]">
                
                { produtos.map((item)=>(
                    <div key={item.id} className="max-w-[220px] m-[20px]">
                    <img src={item.cover} alt="produto" className="w-[200px]"/>
                    <p className="font-bold mb-[10px]">{item.title}</p>
                    <div className="flex items-center gap-2">
                        <strong>{item.price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'} )}</strong>
                        <button onClick={()=>adicionaProduto(item)} className="bg-black text-white p-[5px] rounded-md hover:bg-gray-700 transition-all ease-in-out duration-200"><BsCartPlus /></button>
                    </div>
                </div>
                ))}
 
            </div>
        </section>
    )
}