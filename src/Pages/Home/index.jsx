
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDeatail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
function Home() {
  const context=useContext(ShoppingCartContext);
  return (
    <Layout>
           <div className="flex justify-center w-80 mb-4">
              <h1 className="font-medium text-xl mb-4">Exclusive Products</h1>
          </div>
          <input type="text" placeholder="Search" className="border border-black p-4 w-80 mb-4 rounded-lg"
          onChange={(even)=> {context.setSearchByTitle(even.target.value)}}/>
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {context.items?.map((item)=>(
            <Card key={item.id} data={item}>        
            </Card>
          ))
          }
          </div>
          <ProductDeatail>
          </ProductDeatail>
          <CheckoutSideMenu>
          </CheckoutSideMenu>
    </Layout>   
  )
}
export default Home;