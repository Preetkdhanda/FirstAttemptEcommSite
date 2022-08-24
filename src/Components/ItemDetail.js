import React from "react";
import styled from "styled-components";

const ItemDetail = ({name, type, price,id ,index, onItemSelected})=>{
    
    const Button = styled.button`
    font-size: 1em;
    padding: 1em;
    margin: 1em;
    border: 1px solid orange;
    background: pink;
    `
    const ListItem = styled.li`

    list-style: none;
    border: 2px solid orange;
    font-size: 30px;
   text-align: center;
   font-family: comic-sans;

    `



    const handleButtonClick=(event)=>{
        onItemSelected(event.target.value)


    }



    return(
<>
<ListItem>{name} {type} £{price}<Button value={id} onClick={handleButtonClick}>Add to basket</Button></ListItem>

</>

    )
}

export default ItemDetail;