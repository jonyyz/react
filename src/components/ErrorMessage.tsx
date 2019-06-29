import * as React from "react";

import {
  createStyles,
  withStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";

const styles = createStyles({
  errorMessageContainer: {
    margin: 20,
    display: "flex",
    flexDirection: "row"
  },
  errorMessage: {
    marginTop: 6,
    marginLeft: 6,
  },
});

interface IProps {
  classes: Record<string, string>,
  text: string
}

const ErrorMessage: React.FunctionComponent<IProps> = (props) => {
  const { classes } = props;

  return (
    <div className={classes.errorMessageContainer}>
      <ErrorIcon color="error" fontSize="large" />
      <Typography className={classes.errorMessage} variant="body1">
        {props.text}
      </Typography>
    </div>
  );
}

export default withStyles(styles)(ErrorMessage);
