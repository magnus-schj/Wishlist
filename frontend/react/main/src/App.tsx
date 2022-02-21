import { useState } from "react";
import "./baseStyles.scss";

import ModalComponent from "./components/modal";
import SignInAndSignUp from "./components/SiginInAndSignUp/SignInAndSignUp.component";

import Typography from "@mui/material/Typography";
import { auth } from "./firebase/firebase.utils";
import Button from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => {
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      <Typography variant="h1" color="initial">
        Wishlist
      </Typography>
      {auth.currentUser ? (
        <h1>Du er logget inn</h1>
      ) : (
        <Button variant="contained" onClick={() => open()}>
          Logg inn/registerer deg
        </Button>
      )}

      <AnimatePresence
        //  Disable any inital animations of children thart are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit animation before enetring component is rendered
        exitBeforeEnter={true}
      >
        {modalOpen && (
          <ModalComponent modalOpen={modalOpen} handleClose={close}>
            <SignInAndSignUp />
          </ModalComponent>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
