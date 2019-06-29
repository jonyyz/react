import * as React from "react";

import {
  Theme,
  createStyles,
  withStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = ({ palette, spacing }: Theme) => createStyles({
  footer: {
    padding: spacing(2),
    marginTop: "auto",
    backgroundColor: palette.primary.main,
    color: palette.getContrastText(palette.primary.main)
  }
});

interface IProps {
  classes: Record<string, string>
}

const Header: React.FunctionComponent<IProps> = (props) => {
  const { classes } = props;

  return (
    <div className={classes.footer}>
      <a href="https://www.carbonite.com/" target="_blank" rel="noopener noreferrer">
        <Typography variant="body1">Visit Carbonite!</Typography>
      </a>
    </div>
  );
}

export default withStyles(styles)(Header);
