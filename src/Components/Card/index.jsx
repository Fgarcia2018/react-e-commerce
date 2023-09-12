const Card=()=>{
    return(
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics </span>
                <img className="w-full h-full object-cover rounded-lg" src="https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/w_320,c_limit/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg" alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>                
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-medium">$300</span>
            </p>
        </div>

    );
}
export default Card;