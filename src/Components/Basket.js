import React from "react";
import BasketItemDetail from "./BasketItemDetail";
import styled from "styled-components";

const Basket = ({basketItems}) => { 
    
    const Paragraph = styled.p`
    
    font-size: 40px;
    text-align: center;`
    
const basketPriceList = basketItems.map((item)=>{
    return item.price

})


const totalPrice = basketPriceList.reduce((startingTotal, currentTotal)=> startingTotal + currentTotal);
    





    

    const basketNodes = basketItems.map((item)=>{
        return <BasketItemDetail id={item.id}  name={item.name} type = {item.type} price={item.price}/>
    })

    return(
<>
        {basketNodes}
       <Paragraph>Basket Total: £{totalPrice}</Paragraph>
        
        </>
    )
}

export default Basket;