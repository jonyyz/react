import * as React from "react";

import ErrorMessage from "../components/ErrorMessage";

const NotFound: React.FunctionComponent = () =>
  <ErrorMessage text="Oops!  Sorry, the page you requested was not found! (404)" />;

export default NotFound;
