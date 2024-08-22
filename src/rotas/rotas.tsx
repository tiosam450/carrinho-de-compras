import { createBrowserRouter } from "react-router-dom";
import Home from "../paginas/home";
import Carrinho from "../paginas/carrinho";
import Header from "../componentes/header";

 
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
            path:'/carrinho/:id',
            element:<Carrinho/>
        }

    ]
 }])

 export default rotas