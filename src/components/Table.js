import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarRating from './StarRating';
import {Paper, TableRow, TableHead, TableCell, TableBody, Table } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        margin: '15%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
      },
      table: {
        minWidth: 650,
      },
      header: {
        marginLeft: '0%',
        marginTop: '10px'
      }
}));

//TABLE FUNCTION
export default function SimpleTable(props) {
  const classes = useStyles();
 
  //SEARCH
  const filteredCoins = props.data.filter((coin) => {
    return coin.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
  })
  //console.log('filtered', filteredCoins)
  
  //ORDER BY NAME
  if (props.order === 'asc') {
    console.log('asc test')
    filteredCoins.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0 //default return value (no sorting)
  })

  }
  else if (props.order === 'des') {
    console.log('des test')
    filteredCoins.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameB < nameA) //sort string ascending
          return -1 
      if (nameB > nameA)
          return 1
      return 0 //default return value (no sorting)
  })
  }
  else {
    //console.log('no order test')
  }

  //ORDER BY PRICE
  if (props.orderPrice === 'asc') {
    console.log('asc PRICE test')
    filteredCoins.sort(function(a, b){
      var priceA=a.market_data.current_price.gbp, priceB=b.market_data.current_price.gbp
      if (priceA < priceB) //sort string ascending
          return -1 
      if (priceA > priceB)
          return 1
      return 0 //default return value (no sorting)
  })

  }
  else if (props.orderPrice === 'des') {
    console.log('des PRICE test')
    filteredCoins.sort(function(a, b){
      var priceA=a.market_data.current_price.gbp, priceB=b.market_data.current_price.gbp
      if (priceB < priceA) //sort string ascending
          return -1 
      if (priceB > priceA)
          return 1
      return 0 //default return value (no sorting)
  })
  }
  else {
    console.log('no orderPrice test')
  }
  
   const displayedCoins = filteredCoins.map( coin => (
       <TableRow key={coin.id}>
           <TableCell component="th" scope="row">
              <Link to={{ pathname: 'CoinInfo', aboutCoinProps: {
                coin: coin
              }}} style={{ textDecoration: 'none' }}>
              {coin.name}
              </Link>
              </TableCell>
           <TableCell align="right"><img src={coin.image.thumb} alt={props.imageSmall}></img></TableCell>
           <TableCell align="right">£{coin.market_data.current_price.gbp}</TableCell>
           <TableCell align="right">€{coin.market_data.current_price.eur}</TableCell>
           <TableCell align="right">{coin.symbol}</TableCell>
           <TableCell align="right">£{coin.market_data.market_cap.gbp}</TableCell>
           <TableCell align="right"><StarRating coin={coin} key={coin.id} /></TableCell>
       </TableRow>
   ));
 return (
   <div>
   <Paper className={classes.root}>
       <Table className={classes.table}>
           <TableHead>
               <TableRow>
                   <TableCell >Bitcoins (Top 100 from Coin Gecko)!</TableCell>
                   <TableCell align="right">Symbol</TableCell>
                   <TableCell align="right">Price in gbp&nbsp;(£)</TableCell>
                   <TableCell align="right">Price in eur&nbsp;(€)</TableCell>
                   <TableCell align="right">Sym&nbsp;(g)</TableCell>
                   <TableCell align="right">Market Cap&nbsp;(£)</TableCell>
                   <TableCell align="right">Star&nbsp;(☆)</TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
               {displayedCoins}
           </TableBody>
       </Table>
   </Paper>
   </div>
 );
}
