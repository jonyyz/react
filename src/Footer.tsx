import * as React from "react";

import {
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(({ palette, spacing }: Theme) => createStyles({
  footer: {
    padding: spacing(2),
    marginTop: "auto",
    backgroundColor: palette.primary.main,
    color: palette.getContrastText(palette.primary.main)
  }
}));

const Footer: React.FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <div className={classes.footer}>
      <Typography variant="body1">
        <Link
          href="https://www.carbonite.com/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          Visit Carbonite!
        </Link>
      </Typography>
    </div>
  );
}

export default Footer;
