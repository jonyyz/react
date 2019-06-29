import * as React from "react";

import {
  createStyles,
  withStyles
} from "@material-ui/core/styles";

const styles = createStyles({
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
});

interface IProps {
  classes: Record<string, string>
}

const CenteredContainer: React.FunctionComponent<IProps> = (props) => {
  const {
    classes,
    children
  } = props;

  return (
    <div className={classes.container}>{children}</div>
  );
}

export default withStyles(styles)(CenteredContainer);
