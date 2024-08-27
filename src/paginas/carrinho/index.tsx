
export default function Carrinho(){
    return(
        <section className="w-full flex flex-col justify-center items-center p-[20px]">
            <h1 className="text-[1.6rem] font-bold">Meu carrinho</h1>
            <div className="w-[100%] sm:w-[90%]  py-[60px]">
                
                <div className="w-full flex items-center justify-between border-b-2 py-[10px]">
                    <img src="https://m.media-amazon.com/images/I/510CZ4u-0mL._AC_UF1000,1000_QL80_.jpg" alt="produto" className="max-w-[70px]"/>
                    <p className="font-medium ">Preço: R$ 260,00</p>
                    <div className="flex items-center gap-2">
                        <button className="w-[25px] h-[25px] bg-black text-white rounded-md hover:bg-gray-700 transition-all ease-in-out duration-200">-</button>
                        <p className="font-medium mx-[0px] sm:mx-[10px]">1</p>
                        <button className="w-[25px] h-[25px] bg-black text-white rounded-md hover:bg-gray-700 transition-all ease-in-out duration-200">+</button>
                    </div>
                    <p className="font-medium">Sub total: R$ 260,00</p>
                </div>

                <p className="font-bold my-[16px]">Total: R$ 260,00</p>
 
            </div>
        </section>
    )
}