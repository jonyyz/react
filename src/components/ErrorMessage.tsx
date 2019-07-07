import * as React from "react";

import {
  makeStyles,
  createStyles,
} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";

const useStyles = makeStyles(createStyles({
  container: {
    margin: 20,
    display: "flex",
    flexDirection: "row"
  },
  errorMessage: {
    marginTop: 6,
    marginLeft: 6,
  },
}));

interface IProps {
  text: string;
}

const ErrorMessage: React.FunctionComponent<IProps> = React.memo(({ text }) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <ErrorIcon color="error" fontSize="large" />
      <Typography className={classes.errorMessage} variant="body1">{text}</Typography>
    </div>
  );
});

export default ErrorMessage;
