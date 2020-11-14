import React from "react";

const MainContainer = (props) => (
    <section className="MainContainer">
        <h1>Main Container</h1>
        {props.currentContainer}
    </section>
);
export default MainContainer;