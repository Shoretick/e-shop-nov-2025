import Image from "next/image";
import cascosImg from "../public/img-electronico.png"
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="">
   <div className="relative aspect-3/1 mb-12">
    <Image src={cascosImg} alt="img-Home" fill ></Image>
   </div>
   <ProductList/>
    </div>
  );
}
