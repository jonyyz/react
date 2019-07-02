import * as React from "react";

import "typeface-roboto";
import { createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
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

const App: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Carbonite" />
      <Body />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
