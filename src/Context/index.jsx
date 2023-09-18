import { createContext, useState,useEffect } from "react";

export const ShoppingCartContext=createContext();

export const ShoppingCartProvider=({children})=>{
    // Shopping Cart - Increment Quantity
    const [counter,setCounter]=useState(0);   

     //shopping Cart - Add products to cart
     const [cartProducts,setCartProducts]=useState([]);    

      // Shopping Cart - Order
    const[order,setOrder]=useState([]);

    // Get Products
    const[items,setItems]=useState(null);
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response=>response.json())
        .then(data=>setItems(data))
      },[])
    //   Get Products Search By Title
    const[searchByTitle,setSearchByTitle]=useState(null);

    // Filters items
    const[filteredItems,setFilteredItems]=useState(null);

    const filteredByItems=(items,searchByTitle)=>{
        return items?.filter(item=>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    useEffect(()=>{
      if (searchByTitle) setFilteredItems(filteredByItems(items,searchByTitle))
      },[items,searchByTitle])

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
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems
            }
        }>
            {children}
        </ShoppingCartContext.Provider>            
    );
}
