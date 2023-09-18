const OrderCard=props=>{
    const {id,title,imageUrl,price,handleDelete}=props;
    let renderIconDelete
    if (renderIconDelete){
        <img onClick={()=>handleDelete(id)} src="../../assets/closeIcon.svg" alt="Delete" className="w-5 h-5 cursor-pointer" />
    }     
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
                {renderIconDelete}              
            </div>
          
        </div>
    );
}
export default OrderCard;