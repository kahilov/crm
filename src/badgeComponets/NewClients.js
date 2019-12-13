import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(2),
    }
  }));
export default function NewClients(props) {
    const classes = useStyles();
    return (
        <div>
        <Badge className={classes.margin} color="primary">
          <TrendingUpIcon />
        </Badge>
            Number of new customers - {props.num}
        </div>
    )
}
