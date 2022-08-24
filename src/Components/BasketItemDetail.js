import React from "react";
import styled from "styled-components";
const BasketItemDetail = ({name, type, price,id ,index, onItemSelected})=>{
    



    const ListItem = styled.li`

    list-style: none;
    border: 2px solid orange;
    font-size: 30px;
   text-align: center;
   font-family: comic-sans;

    `




    return(
<>
<ListItem>{name} {type} £{price}</ListItem>

</>

    )
}

export default BasketItemDetail;