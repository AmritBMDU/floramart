import {useRoutes} from "react-router-dom";
import Dashboard from "./views/layout/dashboard";
// import Shop from "./components/shop";
import Home from "./components/index";
import About from "./components/about";
// import Register from "./components/pages/register";
// import Login from "./components/pages/login";
// import FAQ from "./components/pages/faq";
import Shop from "./components/shop/shop";
import ShopDetails from "./components/shop/shopdetails";
import Wishlist from "./components/shop/wishlist";
import Cart from "./components/shop/cart";
import Checkout from "./components/shop/checkout";
import Blog from "./components/blog/blog";
// import BlogDetails from "./components/blog/blogdetails";
import Contact from "./components/contact";
import Signin from "./components/signin";

export default function Router(){
    return useRoutes([
        {
            path:'/',
            element:<Dashboard/>,
            children:[
                {path:'home',element:<Home/>},
                {path:'about',element:<About/>},
                // {path:'register',element:<Register/>},
                // {path:'login',element:<Login/>},
                // {path:'faq',element:<FAQ/>},
                {path:'shop',element:<Shop/>},
                {path:'shopdetails',element:<ShopDetails/>},
                {path:'wishlist',element:<Wishlist/>},
                {path:'cart',element:<Cart/>},
                {path:'checkout',element:<Checkout/>},
                {path:'blog',element:<Blog/>},
                // {path:'blogdetails',element:<BlogDetails/>},
                {path:'contact',element:<Contact/>},
                {path:'signin',element:<Signin/>}
            ]
        }
    ])
}