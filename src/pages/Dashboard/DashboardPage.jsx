import {useTitle} from "../../hooks/useTitle"
import DashboardCard from "./components/DashboardCard";
import DashboardEmpty from "./components/DashboardEmpty";


const DashboardPage = () => {

    const orders = false;
    useTitle("Dashboard")


  return (
   <main>
        <section>
            <p className="text-2xl text-center font-semibold dark:text-slate-200 my-10 underline underline-offset-8"> 
            My Dashboard
            </p>
        </section>

        <section className="px-50">
            {orders && (
                <DashboardCard/>
            )}
        </section>

        <section>
            {!orders && <DashboardEmpty/>}
        </section>
   </main>
  )
}

export default DashboardPage
