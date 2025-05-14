import { useLocation } from "react-router-dom"
import OrderFail from "./components/OrderFail"
import OrderSuccess from "./components/OrderSuccess"
import {useTitle} from "../../hooks/useTitle"

const OrderPage = () => {
    useTitle("Order summary");
    const {state} = useLocation();


  return (
    <main>
      {state.status ? <OrderSuccess/> : <OrderFail/>}
    </main>
  )
}

export default OrderPage
