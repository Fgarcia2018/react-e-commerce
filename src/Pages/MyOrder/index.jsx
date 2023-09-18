import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

function MyOrder() {
  const context=useContext(ShoppingCartContext);
  const currentPath=window.location.pathname
  let index=currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (index==='last')index=context.order?.length-1;
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80">
            <h1> MyOrder</h1>
            <Link to='/My-orders' className="absolute left-0">
              <ArrowLongRightIcon className="h-6 w-6 text-black cursor-pointer"></ArrowLongRightIcon>
            </Link>
        </div>
        <div className='flex-1'>          
                {
                    context.order?.[index]?.products.map((product)=>(
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}                          
                            >
                        </OrderCard>
                    ))
                }  
            </div>  
      </Layout>
    )
  }
  
  export default MyOrder