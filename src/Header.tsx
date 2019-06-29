import * as React from "react";
import { Link } from "react-router-dom";

import {
  createStyles,
  withStyles
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  toolBar: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleContainer: {
    textAlign: "left",
    flexGrow: 1,
    textTransform: "none"
  },
  personIcon: {
    marginRight: 3,
  }
});

interface IProps {
  classes?: any,
  title: string
}

const Header: React.FunctionComponent<IProps> = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <div className={classes.titleContainer}>
            <Typography variant="h5">{props.title}</Typography>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            component={Link}
            to="/users"
          >
            <PersonIcon className={classes.personIcon} /> Get Users
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
