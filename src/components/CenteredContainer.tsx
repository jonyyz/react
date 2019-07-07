import * as React from "react";

import {
  makeStyles,
  createStyles
} from "@material-ui/styles";

const useStyles = makeStyles(createStyles({
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
}));

const CenteredContainer: React.FunctionComponent = ({ children }) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>{children}</div>
  );
}

export default CenteredContainer;
