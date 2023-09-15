/*
*this function calculates total price of a new order
@params{Array} products cartProducts:Array of objects
@return {number} total Price
*/
export const totalPrice=(products)=>{
    let sum=0;
    products.forEach(product => {sum+=product.price
        
    });
    return sum;
        
}