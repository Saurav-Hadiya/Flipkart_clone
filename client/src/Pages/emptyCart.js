import React from "react";
import '../Style/emptyCart.css';

const EmptyCart = ()=>{

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return(
        <div>
            <div className="mainComponent">
            <div className="container">
                <img src={imgurl} width={"15%"} />
                <div>Your cart is empty!</div>
                <div >Add items to it now.</div>
            </div>
            </div>
        </div>
    )

}

export default EmptyCart;