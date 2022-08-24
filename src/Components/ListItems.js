import React from "react";
import ItemDetail from "./ItemDetail";

const ListItems = ({items,onItemSelected}) => { 

    const itemNodes = items.map((item,index)=>{
        
        
        return <ItemDetail onItemSelected={onItemSelected} id={item.id} key={index} name={item.name} type = {item.type} price={item.price}/>
    })

    return(
<>
<ul>
{itemNodes}
</ul>
</>
    )


}

export default ListItems;