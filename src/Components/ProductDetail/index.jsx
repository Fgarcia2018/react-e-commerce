import { useContext } from 'react';
import './styles.css';
import { ShoppingCartContext } from '../../Context';
const ProductDeatail=()=>{
    const context=useContext(ShoppingCartContext)

    return(
        <aside className={`${context.isProductDetailOpen?'flex':'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white p-6`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer" onClick={()=>context.closeProductDetail()}>
                    <img src='../../assets/closeIcon.svg'/></div>
            </div>
            <figure className='px-6'>
                <img className="w-full h-full rounded-lg" 
                src={context.productToShow.images[0]}
                 alt={context.productToShow.title} />                 
            </figure>
            <p className='flex flex-col p-6'> 
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-xl'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>

    )
}
export default ProductDeatail;

