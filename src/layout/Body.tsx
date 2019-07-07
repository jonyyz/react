import * as React from "react";
import {
  makeStyles,
  createStyles
} from "@material-ui/styles";

import Routes from "./Routes";

const useStyles = makeStyles(createStyles({
  container: {
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
  }
}));

const Body: React.FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <Routes />
    </div>
  );
}

export default Body;
