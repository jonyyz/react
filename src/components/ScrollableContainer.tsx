import * as React from "react";

import {
  makeStyles,
  createStyles,
} from "@material-ui/styles";

const useStyles = makeStyles(createStyles({
  scrollable: {
    overflowY: "auto",
    overflowX: "auto",
    "-webkit-overflow-scrolling": "touch",
  }
}));

const ScrollableContainer: React.FunctionComponent = ({ children }) => {
  const classes = useStyles({});

  return (
    <div className={classes.scrollable}>{children}</div>
  );
}

export default ScrollableContainer;
