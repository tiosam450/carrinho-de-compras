import { createBrowserRouter } from "react-router-dom";
import Home from "../paginas/home";
import Carrinho from "../paginas/carrinho";
import Header from "../componentes/header";
import Produto from "../paginas/produto";

 
 const rotas = createBrowserRouter([{
    element:<Header/>,

    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/carrinho',
            element:<Carrinho/>
        },
        {
            path:'/produto/:id',
            element:<Produto/>
        }

    ]
 }])

 export default rotas