import React, { useEffect, useState } from "react";
import ListItems from "../Components/ListItems";
import Basket from "../Components/Basket";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import styled from "styled-components";



const Shop = () => {

    const Title = styled.h1`
    text-align: center;
    font-size: 60px;
    color: purple;
    background-color: orange;
    margin: 0;
    padding: 1cm;`


    const initialItems = [
        {
            id: 0,
            name: "Hubba Bubba",
            type: "Strawberry",
            price: 1.00
        },
        {
            id: 1,
            name: "Monster Munch",
            type: "Pickled Onion",
            price: 1.55
        },
        {
            id: 2,
            name: "SourPatchs",
            type: "Assorted",
            price: 2.15
        },
        {
            id: 3,
            name: "Hersheys",
            type: "Cookie Crumble",
            price: 1.55
        },
        {
            id: 4,
            name: "Drumstick",
            type: "Original",
            price: 0.75
        },
        {
            id: 5,
            name: "Cola Cubes",
            type: "Candy",
            price: 1.75
        },

    ]

    const [items, setItems] = useState(initialItems)
    const [selectedItems, setSelectedItems] = useState([])

    const onItemSelected=(id)=>{
       
       const itemSelected = items[id]

       setSelectedItems([...selectedItems, itemSelected])
     
       
    }


    return (
        <>
        <NavBar/>
            <Title>Candy Shop</Title>
            
            <Routes>
            <Route path="/basket" element={<Basket basketItems={selectedItems}/>}/>
            <Route path="/shop" element={<ListItems items={items} onItemSelected={onItemSelected}/>}/>
            </Routes>
           
        </>
    )




}

export default Shop;