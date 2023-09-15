// import React from "react";
// import { useContext } from "react";
// const context=useContext(ShoppingCartContext);

const OrderCard=props=>{
    const {id,title,imageUrl,price,handleDelete}=props;
  
    return(
        <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-1 ">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-1">
                <p className="text-lg font-medium">${price}</p>
                <img onClick={()=>handleDelete(id)} src="../../assets/closeIcon.svg" alt="Delete" className="w-5 h-5" />
            </div>
        </div>
    );
}
export default OrderCard;