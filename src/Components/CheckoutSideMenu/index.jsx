import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
const CheckoutSideMenu=()=>{
    const context=useContext(ShoppingCartContext)   
    const handleDelete=(id)=>{
        const filteredProducts=context.cartProducts.filter(product=>product.id!=id);
        context.setCartProducts(filteredProducts);
        context.setCounter(context.counter-1);
    }
    const handleCheckout=()=>{
        const orderToAdd={
            date:'',
            products:context.cartProducts,
            totalProducts:context.cartProducts.length,
            totalPrice:totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order,orderToAdd])
        context.setCartProducts([])
        context.setCounter(0);
    }
       
    return(
        <aside className={`${context.isCheckoutMenuOpen?'flex':'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white p-6`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div className="absolute right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer" onClick={()=>context.closeProductDetail()}>
                    <img src='../../assets/closeIcon.svg' onClick={()=>{context.closeCheckoutMenu()}}/></div>
            </div>
            <div className='py-6  overflow-y-scroll overflow-x-hidden flex-1'>          
                {
                    context.cartProducts.map((product)=>(
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                            >
                        </OrderCard>
                    ))
                }  
            </div>  
            <div className=' px-6 mb-6'>
                <p className='flex justify-between item-center mb-6'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'> ${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='My-order/last'>             
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={()=>handleCheckout()}>Checkout</button>
                </Link>
            </div>

        </aside>
    )
}
export default CheckoutSideMenu;