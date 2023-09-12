import { useRoutes, BrowserRouter} from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn';
import NavBar from '../../Components/NavBar';
import './App.css';

const AppRoutes=()=>{
  let routes=useRoutes([
    { path:'/', element:<Home />},
    { path:'/My-orders', element:<MyOrders/>},
    { path:'/My-Account', element:<MyAccount/>},
    { path:'/Sign-in', element:<SignIn/>},
    { path:'/*', element:<NotFound/>},
  ])
  return routes;
}

const App=()=> {  
  return (
    <>
  
    <BrowserRouter>
    <AppRoutes></AppRoutes>
    <NavBar></NavBar>
    </BrowserRouter>
    </>
  )
}
export default App
