const OrdersCard=props=>{
    const {totalPrice,totalProducts}=props;
     
    return(
        <div className="flex justify-between items-center py-2 border border-black">
           <p>
            <span>18.09.2023</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
            </p>
          
        </div>
    );
}
export default OrdersCard;