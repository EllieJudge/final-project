import React from 'react';
import { makeStyles, Card, CardActions, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Circulation Supply:
        </Typography>
        <Typography variant="h5" component="h2">        
          {props.data.coin.market_data.circulating_supply}
        </Typography>
        <hr />
        <Typography className={classes.pos} color="textSecondary">
          Last updated:
        </Typography>       
        <Typography variant="body2" component="p">
        {props.data.coin.last_updated}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}