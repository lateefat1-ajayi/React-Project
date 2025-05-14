import { Route, Routes } from "react-router-dom";
import { HomePage, ProductList } from "../pages";
import { ProductDetails } from "../pages/ProductDetails";
import { CartPage } from "../pages/Cart/CartPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      </>
  )
      
}

