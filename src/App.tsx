import * as React from "react";

// In order to use jest's moduleNameMapper, index.css must be explicitly specified to be mocked
import "typeface-roboto/index.css";
import { createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import blueGrey from "@material-ui/core/colors/blueGrey";

import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

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
