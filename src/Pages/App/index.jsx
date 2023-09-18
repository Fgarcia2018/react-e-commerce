import { useRoutes, BrowserRouter} from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn';
import NavBar from '../../Components/NavBar';
import {ShoppingCartProvider} from "../../Context";
import './App.css';

const AppRoutes=()=>{
  let routes=useRoutes([
    { path:'/', element:<Home />},
    { path:'/My-orders', element:<MyOrders/>},
    { path:'/My-order/last', element:<MyOrder/>},
    { path:'/My-order/:id', element:<MyOrder/>},
    { path:'/My-Account', element:<MyAccount/>},
    { path:'/Sign-in', element:<SignIn/>},
    { path:'/*', element:<NotFound/>},
  ])
  return routes;
}
const App=()=> {  
  return (
    <>
      <ShoppingCartProvider>
          <BrowserRouter>          
            <NavBar></NavBar>
            <AppRoutes></AppRoutes>
        </BrowserRouter>
      </ShoppingCartProvider>    
    </>
  )
}
export default App
