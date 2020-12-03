import React from "react";
import "./user-list.css";

import "../user/user.component";
import User from "../user/user.component";

const UserList = (props) => (
    <section className="user-list">
        <h1>Navn</h1>
        <ul>
            <User name="Magnus" onClick={props.handleClick}/>
            <User name="Hanne" />
            <User name="Bjørn" />
            <User name="Sunniva" />
        </ul>
    </section>
);
export default UserList;