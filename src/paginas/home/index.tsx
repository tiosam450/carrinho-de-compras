import { BsCartPlus } from "react-icons/bs";

export default function Home(){
    return(
        <section className="w-full flex flex-col justify-center items-center p-[20px]">
            <h1 className="text-[1.6rem] font-bold">Produtos em alta</h1>
            <div className="w-[90%] grid grid-cols-[_minmax(200px,_1fr)_minmax(200px,_1fr)__minmax(200px,_1fr)] gap-[20px]">
                <div className="max-w-[220px]">
                    <img src="https://m.media-amazon.com/images/I/510CZ4u-0mL._AC_UF1000,1000_QL80_.jpg" alt="produto" className="w-[200px]"/>
                    <p className="font-bold mb-[10px]">JBL, Fone de Ouvido, Headset Tune 510BT - Preto</p>
                    <div className="flex items-center gap-2">
                        <strong>R$ 260,00</strong>
                        <button className="bg-black text-white p-[5px] rounded-md hover:bg-gray-700 transition-all ease-in-out duration-200"><BsCartPlus /></button>
                    </div>
                </div>
               
                
            </div>
        </section>
    )
}