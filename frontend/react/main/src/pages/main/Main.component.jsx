import { useState } from "react";

import MOCK_DATA from "../../assets/MockData";
import "./main.styles.css";

const Main = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [wrongLogin, setWrongLogin] = useState(false);

  const validator = (user) => {
    return user.name === userNameValue && user.password === passwordValue;
  };

  const handleLogIn = () => {
    const currentUser = MOCK_DATA.find(validator);
    if (currentUser) {
      console.log(currentUser);
      setIsLoggedIn(true);
      setWrongLogin(false);
    } else {
      setWrongLogin(true);
    }
  };

  return (
    <div className="main">
      <h2>Velkommen til den nye ønskeliste-siden!</h2>
      <h2>
        Den er per nå work in progress, så hvis du har noen tilbakemeldinger,
        eller merker at noe er galt, send meg melding!
      </h2>
      <br />
      {isLoggedIn ? (
        <h2>Du er logget inn.</h2>
      ) : (
        <div className="log-in">
          <h2>Du er for øyeblikket ikke logget inn.</h2>
          <h2>Logg inn her:</h2>
          <span>
            Brukernavn:
            <input
              type="text"
              onChange={(e) => setUserNameValue(e.target.value)}
            />{" "}
            <br />
          </span>
          <span>
            Passord:
            <input
              type="password"
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </span>
          <br />
          <button onClick={() => handleLogIn()}>Logg inn</button>
          {wrongLogin ? (
            <span style={{ color: "red" }}>Feil brukernavn eller passord</span>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Main;
