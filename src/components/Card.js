import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button, Card, CardContent} from '@material-ui/core';

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
  a: {
    textDecoration: 'none'
  },
 
});

export default function SimpleCard(props) {
  const myLink = `https://www.coingecko.com/en/coins/${props.data.coin.id}/usd` //template literal
  const classes = useStyles();
  // console.log('TESTING FROM CARD 1', props.data)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Coin Name:
        </Typography>
        <Typography variant="h5" component="h2">
          {props.data.coin.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.data.coin.symbol}
        </Typography>
        <Typography variant="body2" component="p">
          <img src={props.data.coin.image.thumb} alt={props.imageSmall}></img>
          <br />
        </Typography>
        <Button size="small"><a href={myLink} className={classes.a}>Learn More</a></Button>
      </CardContent>
    </Card>
   ) }



   
