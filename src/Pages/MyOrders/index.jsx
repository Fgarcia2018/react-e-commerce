import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrdersCard from '../../Components/OrdersCard';
import { Link } from "react-router-dom";

function MyOrders() {
  const context=useContext(ShoppingCartContext);
 
    return (
      <Layout>       
        MyOrders
        {
          context.order.map((order,index)=>(
          <Link key={index} to={`/My-order/${index}`}>
            <OrdersCard
              
             totalPrice={order.totalPrice}
             totalProducts={order.totalProducts}/>
           </Link>    
          ))
        }   
            
      </Layout>
    )
  }
  
  export default MyOrders