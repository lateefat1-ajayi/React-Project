import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ProjectLogo.png";
import { Search } from "../Sections/Search";
import { DropdownLogOut, DropdownLogin } from "../index";
import { useCart } from "../../context";
import { CiSearch } from "react-icons/ci";
import { BsGearWideConnected } from "react-icons/bs"
import { IoCartOutline } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";

export const Header = () => {
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>      
      <nav className="bg-white dark:bg-gray-900">
          <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
              <Link to="/" className="flex items-center">
                  <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
              </Link>

              <div className="flex items-center relative">
                  <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 ">
                  <BsGearWideConnected />
                  </span>

                  <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 "> <CiSearch /></span>

                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl relative">
                    <IoCartOutline />
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                  </Link>
                  <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer text-2xl text-gray-700 dark:text-white"><LuCircleUser /></span>
                  { dropdown && ( token ? <DropdownLogin setDropdown={setDropdown} /> : <DropdownLogOut setDropdown={setDropdown} /> ) }
              </div>
          </div>
      </nav>
      { searchSection && <Search setSearchSection={setSearchSection} /> }
      
    </header>
  )
}


