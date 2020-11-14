import React from "react";
import "./user-list.css";

import "../user/user.component";
import User from "../user/user.component";

const UserList = (props) => (
    <section className="user-list">
        <h1>Navn</h1>
        <button onClick={props.handleClick}>Change</button>
        <ul>
            <User name="Magnus" />
            <User name="Hanne" />
            <User name="Bjørn" />
            <User name="Sunniva" />
        </ul>
    </section>
);
export default UserList;