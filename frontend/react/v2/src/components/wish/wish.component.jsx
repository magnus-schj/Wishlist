import React from "react";

const Wish = ({ key, wish, ...otherProps }) => (
  <li className="wish" key={key} {...otherProps}>
    {wish}
  </li>
);

export default Wish;
