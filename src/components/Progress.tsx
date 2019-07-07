import * as React from "react";

import {
  makeStyles,
  createStyles,
} from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Progress: React.FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <CircularProgress size={50} thickness={6} />
    </div>
  );
}

export default Progress;
