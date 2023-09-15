import { createContext, useState } from "react";

export const ShoppingCartContext=createContext();

export const ShoppingCartProvider=({children})=>{
    // Shopping Cart - Increment Quantity
    const [counter,setCounter]=useState(0);   

     //shopping Cart - Add products to cart
     const [cartProducts,setCartProducts]=useState([]);    

      // Shopping Cart - Order
    const[order,setOrder]=useState([]);

    // Product Detail - Open/Close
    const [isProductDetailOpen,setIsProductDetailOpen]=useState(false);
    const openProductDetail=()=>setIsProductDetailOpen(true);
    const closeProductDetail=()=>setIsProductDetailOpen(false);

    // Product Detal - Show Product
    const [productToShow,setProductToShow]=useState({
        id:'',
        images:[],
        title:'',
        description:'',
        price:''});

    // checkout-side-menu - Open/Close
    const [isCheckoutMenuOpen,setIsCheckoutMenuOpen]=useState(false);
    const openCheckoutMenu=()=>setIsCheckoutMenuOpen(true);
    const closeCheckoutMenu=()=>setIsCheckoutMenuOpen(false);    

    return(
        <ShoppingCartContext.Provider value={
            {
                counter,
                setCounter,
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutMenuOpen,                
                openCheckoutMenu,
                closeCheckoutMenu,
                order,
                setOrder
            }
        }>
            {children}
        </ShoppingCartContext.Provider>            
    );
}
