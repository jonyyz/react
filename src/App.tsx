import * as React from "react";

import "typeface-roboto";
import { createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  withStyles,
  createStyles
} from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import blueGrey from "@material-ui/core/colors/blueGrey";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const theme = createMuiTheme({
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

const styles = createStyles({
  "@global": {
    a: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      fontWeight: "bold"
    }
  }
});

class App extends React.PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header title="Carbonite" />
        <Body />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
