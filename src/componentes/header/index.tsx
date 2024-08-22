import { Link, Outlet } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header(){
    return(
        <>
        <header className="bg-slate-200 w-full flex justify-center py-[12px]">
            <nav className="w-[90%] flex items-center justify-between">
                <h3>Logo</h3>
                <Link to='/carrinho' className="relative">
                    <MdOutlineShoppingCart className=" text-[1.5rem]"/>
                    <span className="absolute flex items-center justify-center text-white text-[.7rem] bg-blue-500 rounded-full w-[15px] h-[15px] -right-[6px] -top-[5px]">2</span>
                </Link>
            </nav>
        </header>
        <Outlet/>
        </>
    )
}