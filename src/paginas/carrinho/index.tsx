import { useContext } from "react"
import { ContextAPI } from "../../api/contextApi"
import { FaRegTrashAlt } from "react-icons/fa";

export default function Carrinho(){
    const { carrinho} = useContext(ContextAPI)

    return(
        <section className="w-full flex flex-col justify-center items-center p-[20px]">
            {carrinho.length > 0 ? <h1 className="text-[1.6rem] font-bold">Meu carrinho</h1>:<h1 className="text-[1.6rem] font-bold">Carrinho vazio</h1>}
            {carrinho.length > 0 && 
            <div className="w-[100%] sm:w-[90%]  py-[60px]">
                
            {carrinho.map((produto)=>(
                <div key={produto.id} className="w-full flex items-center justify-between border-b-2 py-[10px]">
                <img src={produto.cover} alt="produto" className="max-w-[70px]"/>
                <p className="font-medium ">Preço: {produto.price.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}</p>
                <div className="flex items-center gap-2">
                    <button className="w-[25px] h-[25px] bg-black text-white rounded-md hover:bg-gray-700 transition-all ease-in-out duration-200">-</button>
                    <p className="font-medium mx-[0px] sm:mx-[10px]">1</p>
                    <button className="w-[25px] h-[25px] bg-black text-white rounded-md hover:bg-gray-700 transition-all ease-in-out duration-200">+</button>
             </div>
                <p className="font-medium">Sub total: {produto.total.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}</p>
                
            </div>
            ))}

            <p className="font-bold my-[16px]">Total: {}</p>

        </div>}
        </section>
    )
}