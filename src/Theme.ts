import { createMuiTheme } from "@material-ui/core";
import lightGreen from "@material-ui/core/colors/lightGreen";
import blueGrey from "@material-ui/core/colors/blueGrey";

export const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: blueGrey,
    secondary: lightGreen,
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
