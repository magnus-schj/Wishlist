import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setNumber } from "../../redux/test-state/test.actions";
import { logIn, logOut } from "../../redux/userLoggedIn/userLoggedIn.actions";
import "./main.styles.css";

const Main = () => {
  // DISPATCH
  const dispatch = useDispatch();

  // SELECTORS
  const mockData = useSelector((state) => state.mockData.data);
  const test = useSelector((state) => state.test);
  const userLoggedIn = useSelector((state) => state.userLoggedIn);

  // LOCAL STATE
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [wrongLogin, setWrongLogin] = useState(false);

  // FUNCTIONS
  const testFunc = () => {
    dispatch(setNumber(1));
  };

  const validator = (user) => {
    return user.name === userNameValue && user.password === passwordValue;
  };

  const handleLogIn = () => {
    const currentUser = mockData.find(validator);
    if (currentUser) {
      setWrongLogin(false);
      dispatch(logIn(userNameValue));
    } else {
      setWrongLogin(true);
    }
  };

  const handleLogOut = () => {
    dispatch(logOut(0));
  };
  return (
    <div className="main">
      <h2>Velkommen til den nye ønskeliste-siden!</h2>
      <h2>
        Den er per nå work in progress, så hvis du har noen tilbakemeldinger,
        eller merker at noe er galt, send meg melding!
      </h2>
      <br />
      {userLoggedIn ? (
        <div className="user-logged-in">
          <h2>Du er logget inn som {userLoggedIn}</h2>
          <button onClick={() => handleLogOut()}>Logg ut</button>
        </div>
      ) : (
        <div className="log-in">
          <h2>Du er for øyeblikket ikke logget inn.</h2>
          <h2>Logg inn her:</h2>
          <span>
            Brukernavn:
            <input
              type="text"
              onChange={(e) => setUserNameValue(e.target.value)}
            />
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
      <button onClick={() => testFunc()}>{test.number}</button>
    </div>
  );
};

export default Main;
