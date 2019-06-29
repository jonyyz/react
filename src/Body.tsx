import * as React from "react";
import {
  createStyles,
  withStyles
} from "@material-ui/core/styles";

import Routes from "./Routes";

const styles = () => createStyles({
  container: {
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
  }
});

interface Props {
  classes: any;
}

class Body extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Routes />
      </div>
    )
  }
}

export default withStyles(styles)(Body);
