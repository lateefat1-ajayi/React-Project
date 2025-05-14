import { BiCart } from "react-icons/bi"

const DashboardEmpty = () => {
  return (
     <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded ">
      <div className="my-5">
        <p className="text-green-600"> 
            <BiCart/>
        </p>

        <p>Oops! Your order dashboard looks empty!</p>

        <p>Add eBooks to your cart from our store collection.</p>
      </div>
      
      <a href="/" type="button" className="tect-white bg-blue-700 hover:bg-blue-800 rounded-lg tect-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none inline-flex items-center gap-2">
      Continue Shopping  <BiCart/>
      </a>
    </section>
  )
}

export default DashboardEmpty
