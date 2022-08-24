import React from "react";
import BasketItemDetail from "./BasketItemDetail";

const Basket = ({basketItems}) => { 
    const basketNodes = basketItems.map((item)=>{
        return <BasketItemDetail id={item.id}  name={item.name} type = {item.type} price={item.price}/>
    })

    return(
<>
        {basketNodes}
        </>
    )
}

export default Basket;