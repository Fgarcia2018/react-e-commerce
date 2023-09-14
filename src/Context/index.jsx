import { createContext, useState } from "react";

export const ShoppingCartContext=createContext();

export const ShoppingCartProvider=({children})=>{
    // Shopping Cart - Increment Quantity
    const [counter,setCounter]=useState(0);

    // Product Detail - Open/Close
    const [isProductDetailOpen,setIsProductDetailOpen]=useState(false);
    const openProductDetail=()=>setIsProductDetailOpen(true);
    const closeProductDetail=()=>setIsProductDetailOpen(false);

    // Product Detal - Show Product
    const [productToShow,setProductToShow]=useState({
        images:[],
        title:'',
        description:'',
        price:''});


    return(
        <ShoppingCartContext.Provider value={
            {
                counter,
                setCounter,
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                productToShow,
                setProductToShow
            }
        }>
            {children}
        </ShoppingCartContext.Provider>            
    );
}
