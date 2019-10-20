import React from 'react';
import { makeStyles, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import StarRating from './StarRating';


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
  star: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Market Cap:
        </Typography>
        <Typography variant="h5" component="h2">
          {props.data.coin.market_data.market_cap_change_24h}
        </Typography>
        <hr />
        <Typography variant="body2" component="p">
        <div className={classes.star}>Add to Favourites:</div> 
          <div>
          <StarRating coin={props.data.coin} key={props.data.coin.id} />
          </div>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}