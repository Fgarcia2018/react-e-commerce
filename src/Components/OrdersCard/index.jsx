import {ChevronRightIcon} from '@heroicons/react/24/solid'
const OrdersCard=props=>{
    const {totalPrice,totalProducts}=props;
     
    return(
        <div className="flex w-80 justify-between items-center p-2 mb-2 bg-gray-200 rounded-lg">
          <p className="flex justify-between w-full">
            <div className="flex flex-col items-center font-light">
                <span>18.09.2023</span>
                <span>{totalProducts} Articles</span>
            </div>
            <div className="flex items-center gap-2 "> 
                <span className="font medium text-2xl text-red-500" >${totalPrice}</span>                  
                <ChevronRightIcon className='h-6 w-6 text-red-500'></ChevronRightIcon>
            </div>   
          </p>
        </div>
    );
}
export default OrdersCard;