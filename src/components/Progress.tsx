import * as React from "react";

import {
  createStyles,
  withStyles
} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

interface IProps {
  classes: Record<string, string>
}

const Progress: React.FunctionComponent<IProps> = (props) => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <CircularProgress size={50} thickness={6} />
    </div>
  );
}

export default withStyles(styles)(Progress);
