import {NavLink}  from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../../utils";

const NavBar=()=>{      
    const IsUnderLine='underline underline-offset-4';
    const context=useContext(ShoppingCartContext)
    return(
    <>
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white'>
        <ul className="flex items-center gap-3">
            <li className=" font-semibold text-lg">
                <NavLink
                to='/'              
                >
                    Shopi
                </NavLink>          
            </li>
            <li>
                <NavLink
                 to='/'
                 className={({ isActive, isPending }) =>
                isPending ? "undefined" : isActive ? IsUnderLine : ""
                }onClick={()=>context.setFilteredItems(null)}>
                    All
                </NavLink>          
            </li>
            <li>
                <NavLink
                 to='/clothes'
                 className={({ isActive, isPending }) =>
                isPending ? "undefined" : isActive ? IsUnderLine : ""                
                }onClick={()=>context.setFilteredItems(context.otherFilters('Clothes'))}>
                    Clothes
                </NavLink>          
            </li>
            <li>
                <NavLink
                 to='/electronics'
                 className={({ isActive, isPending }) =>
                isPending ? "undefined" : isActive ? IsUnderLine : ""
                }onClick={()=>context.setFilteredItems(context.otherFilters('Electronics'))}>
                    Electronics
                </NavLink>          
            </li>
            <li>
                <NavLink
                 to='/furnitures'
                 className={({ isActive, isPending }) =>
                isPending ? "undefined" : isActive ? IsUnderLine : ""
                }onClick={()=>context.setFilteredItems(context.otherFilters('Furniture'))}>
                    Furnitures
                </NavLink>          
            </li>
            <li>
                <NavLink
                 to='/toys'
                 className={({ isActive, isPending }) =>
                isPending ? "undefined" : isActive ? IsUnderLine : ""
                }onClick={()=>context.setFilteredItems(context.otherFilters('toys'))}>
                    Toys
                </NavLink>          
            </li>
            <li>
                <NavLink
                 to='/others'
                 className={({ isActive, isPending }) =>
                isPending ? "undefined" : isActive ? IsUnderLine : ""
                }onClick={()=>context.setFilteredItems(context.otherFilters('Others'))}>
                    Others
                </NavLink>          
            </li>
        </ul>
        <ul className="flex items-center justify-between gap-3">
            <li className="text-black/60">               
                andgarcia_24@hotmail.com
            </li>
            <li>
                <NavLink
                 to='/my-account'
                 className={({ isActive, isPending }) =>
                 isPending ? "undefined" : isActive ? IsUnderLine : ""
                 }>
                    My Account
                </NavLink>          
            </li>
            <li>
                <NavLink
                 to='/my-orders'
                 className={({ isActive, isPending }) =>
                 isPending ? "undefined" : isActive ? IsUnderLine : ""
                 }>
                    My Orders
                </NavLink>          
            </li>
            <li>
                <NavLink
                 to='/sign-in'
                 className={({ isActive, isPending }) =>
                 isPending ? "undefined" : isActive ? IsUnderLine : ""
                 }>
                    Sign In
                </NavLink>          
            </li>
            <li className="flex gap-2">
            <img  src="../../assets/shoppingCartIcon.svg" alt="shopping-cart" className="w-6 h-6 cursor-pointer"
             onClick={()=>{context.openCheckoutMenu()}}/>{context.counter} 
            </li>
        </ul>
          
    </nav>
  
    </>
  )
}
export default NavBar

// 