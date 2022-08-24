import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {

    const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;`


    return(

        <List>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/basket">Basket</Link></li>

        </List>
    )
}

export default NavBar;