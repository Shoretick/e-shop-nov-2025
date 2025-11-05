import Link from "next/link";
import Image from "next/image";
import logo from "../../public/icons png/icons8-gary-el-caracol-100.png"



const Footer = () => {
    return(
        <div className="mt-16 flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-between bg-gray-800 rounded-lg p-8">
            <div className="flex flex-col gap-4 items-center md:items-start  text-gray-400">
                <Link href={"/"} className="flex items-center"> 

         <Image src={logo} alt="Eshop-Logo" width={36} height={36} className="w-6 h-6 md:h-9 md:w-9" />
           <p className="hidden md:block text-md font-medium tracking-wider">
             Caracol
            </p>
         </Link>
         <p>2025 Caracol Shop.</p>
         <p>All Rigths reserved.</p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-100">Links</p>
                <Link href={"/"}>Homepage</Link>
                <Link href={"/"}>Contacto</Link>
                <Link href={"/"}>Servicios</Link>
                <Link href={"/"}>Politicas de privaidad</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-100">Links</p>
                <Link href={"/"}>Productos</Link>
                <Link href={"/"}>Productos nuevos</Link>
                <Link href={"/"}>Los mas vendidos</Link>
                <Link href={"/"}>Ofertas</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-100">Links</p>
                <Link href={"/"}>Nosotros</Link>
                <Link href={"/"}>contactanos</Link>
                <Link href={"/"}>Blog</Link>
                <Link href={"/"}>Sponsors</Link>
            </div>
            
        </div>
    )
    

    
}

export default Footer;