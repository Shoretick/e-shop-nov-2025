import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import logo from "../../public/icons png/icons8-gary-el-caracol-100.png"
import {Bell, Home, ShoppingCart} from "lucide-react"



const Navbar = () => {

    return(
        <nav className="w-full flex items-center justify-between border-b border-gray-200"> 
         {/*LEFT*/}
         <Link href={"/"} className="flex items-center"> 

         <Image src={logo} alt="Eshop-Logo" width={36} height={36} className="w-6 h-6 md:h-9 md:w-9" />
           <p className="hidden md:block text-md font-medium tracking-wider">
             Caracol
            </p>
         </Link>

         {/*RIGTH */}
         <div className=" flex items-center gap-6">
         <SearchBar/>  
         <Link href={"/"}> 
         <Home className=" w-4 h-4 text-gray-600" />
         </Link>
         <Bell className=" w-4 h-4 text-gray-600" />
         <ShoppingCart className=" w-4 h-4 text-gray-600" />
         <Link href={"/login"}> Sing In</Link>
         </div>    
        </nav>
       
       
        
    )
}

export default Navbar;