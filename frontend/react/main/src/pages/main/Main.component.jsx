import "./main.styles.css";

const Main = ({ isLoggedIn }) => {
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
            <input type="text" /> <br />
          </span>
          <span>
            Passord:
            <input type="password" />
          </span>
          <br />
          <button>Logg inn</button>
        </div>
      )}
    </div>
  );
};

export default Main;
