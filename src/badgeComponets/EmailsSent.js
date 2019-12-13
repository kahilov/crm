import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(2),
    },
  }));
export default function EmailsSent(props) {
    const classes = useStyles();
    return (
        <div>
        <Badge className={classes.margin} color="primary">
          <MailIcon />
        </Badge>
           Emails Sent - {props.num}
        </div>
    )
}
