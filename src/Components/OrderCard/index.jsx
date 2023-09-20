const OrderCard=props=>{
    const {id,title,imageUrl,price,handleDelete}=props;    
    let handlerDelete
    if(handleDelete)
       {
        handlerDelete=<img src="../../assets/closeIcon.svg" alt="Delete" className="w-5 h-5 cursor-pointer" onClick={()=>handleDelete(id)}/>
     }
     
    return(
        <div className="flex justify-between w-80 py-2">
            <div className="flex items-center gap-3  ">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2" >
                <p className="text-lg font-medium">${price}</p>
                  {handlerDelete}             
            </div>
        </div>
    );
}
export default OrderCard;