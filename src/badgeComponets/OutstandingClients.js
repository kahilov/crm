import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import PersonIcon from "@material-ui/icons/Person";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));
export default function OutstandingClients(props) {
  const classes = useStyles();
  return (
    <div>
      <Badge className={classes.margin} color="primary">
        <PersonIcon />
      </Badge>
      {props.num} Outstanding Clients
    </div>
  );
}
