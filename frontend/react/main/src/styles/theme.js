import { blue, red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: blue,
    danger: red,
  },
});

export default theme;
