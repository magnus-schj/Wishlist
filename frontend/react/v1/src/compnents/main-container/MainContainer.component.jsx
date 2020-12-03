import React from "react";
import Main from "../main-component/main.component";
import WishList from "../wishList/WishList.component";

const MainContainer = (props) => (
    <section className="MainContainer">
        <h1>Main Container</h1>
        {console.log(props.isMain)}
        {() => { return(props.isMain ? <Main /> : <WishList /> )}}
    </section>
);
export default MainContainer;