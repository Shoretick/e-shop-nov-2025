"use client"

import { ProductType } from "../types";



const ProductCard = ({product}:{product:ProductType}) =>{
 
    return(
        <div>ProductCard  ID:{product.id}
        </div>
    )
}

export default ProductCard;