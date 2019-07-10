import * as React from "react";

// In order to use jest's moduleNameMapper, index.css must be explicitly specified to be mocked
import "typeface-roboto/index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { theme } from "./Theme";

import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

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
