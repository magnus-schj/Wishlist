import Typography from "@mui/material/Typography";
import { auth } from "./firebase/firebase.utils";
import Button from "@mui/material/Button";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import ModalComponent from "./components/modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <Typography variant="h1" color="initial">
        Wishlist
      </Typography>
      {auth.currentUser ? (
        <h1>Du er logget inn</h1>
      ) : (
        <Button variant="contained" onClick={() => setModalOpen(!modalOpen)}>
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
          <ModalComponent
            modalOpen={modalOpen}
            handleClose={close}
            text="fuck off"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
