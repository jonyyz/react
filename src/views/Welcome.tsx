import * as React from "react";

import { Theme } from "@material-ui/core/styles";
import {
  makeStyles,
  createStyles
} from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import CenteredContainer from "../components/CenteredContainer";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3, 2),
    maxWidth: 600
  },
}));

const Welcome: React.FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <CenteredContainer>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            Greetings and Salutations!
          </Typography>
          <Typography component="p">
            Welcome to Jon's Carbonite Take Home coding test.  Use the Get Users button in the top right corner to evaluate the exercise.
          </Typography>
        </Paper>
      </div>
    </CenteredContainer>
  );
}

export default Welcome;
