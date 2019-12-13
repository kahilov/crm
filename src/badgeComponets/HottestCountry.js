import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import LanguageIcon from "@material-ui/icons/Language";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));
export default function HottestCountry(props) {
  const classes = useStyles();
  return (
    <div>
      <Badge className={classes.margin} color="primary">
        <LanguageIcon />
      </Badge>
      Hottest Country - {props.country}
    </div>
  );
}
