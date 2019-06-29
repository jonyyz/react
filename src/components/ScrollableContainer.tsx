import * as React from "react";

import {
  createStyles,
  withStyles
} from "@material-ui/core/styles";

const styles = createStyles({
  scrollable: {
    overflowY: "auto",
    overflowX: "auto",
    "-webkit-overflow-scrolling": "touch",
  }
});

interface IProps {
  classes: Record<string, string>
}

const ScrollableContainer: React.FunctionComponent<IProps> = (props) => {
  const {
    classes,
    children
  } = props;

  return (
    <div className={classes.scrollable}>{children}</div>
  );
}

export default withStyles(styles)(ScrollableContainer);
