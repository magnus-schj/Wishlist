import React from "react";
import "./user-list.css";

import "../user/user.component";
import User from "../user/user.component";

const UserList = () => (
    <section className="user-list">
        <h1>Navn</h1>
        <ul>
            <User name="Magnus" />
            <User name="Hanne" />
            <User name="Bjørn" />
            <User name="Sunniva" />
        </ul>
    </section>
);
export default UserList;