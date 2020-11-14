import React from "react";
import "./user.component.css";

const User = (props) => (
    <li>
        <button className="user">{props.name}</button>
    </li>
)

export default User;