import React from "react";
import "./WishList.component.css";

import "../wish/wish.component";
import Wish from "../wish/wish.component";

const WishList = ()=> (
    <div className="WishList">
        <h1>Wishlist component</h1>
        <ul>
            <Wish wish="Wish 1"/>
            <Wish wish="Wish 2"/>
            <Wish wish="Wish 3"/>
            <Wish wish="Wish 4"/>
        </ul>
    </div>
);

export default WishList;