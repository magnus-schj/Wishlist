import React from "react";

import "./homepage.styles.css";

import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="home-page">
    <h1>Velkommen til en ny Ønskeliste!</h1>
    <h2>Her er en del av de tingene som er nye:</h2>
    <ul>
      <li>Nytt utseende</li>
      <li>Man kan legge til ditten</li>
      <li>Man kan legge til datten</li>
    </ul>
    <Link to="/sign-in-sign-up">Logg inn eller registrer deg</Link>
  </div>
);

export default HomePage;
