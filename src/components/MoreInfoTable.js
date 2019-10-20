import React from 'react';
import {Paper, TableRow, TableHead, TableCell, TableBody, Table, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    
    width: '70%',
    margin: '15%',
    marginTop: 0,
    overflowX: 'auto',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

export default function DenseTable(props) {
  console.log('TESTING FROM DENSE TABLE!!', props.data)
  let data = props.data
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="right">Current Price</TableCell>
              <TableCell align="right">High (24h)</TableCell>
              <TableCell align="right">Low (24h)</TableCell>
              <TableCell align="right">Market Cap Change in Currencies</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow key={data.coin.id}>
                <TableCell align="right">{data.coin.market_data.current_price.aed}(aed)</TableCell>
                <TableCell align="right">{data.coin.market_data.high_24h.aed}(aed)</TableCell>
                <TableCell align="right">{data.coin.market_data.low_24h.aed}(aed)</TableCell>
                <TableCell align="right">{data.coin.market_data.market_cap_change_24h_in_currency.aed}(aed)</TableCell>
              </TableRow>

              <TableRow key={data.coin.id}>
                <TableCell align="right">{data.coin.market_data.current_price.ars}(ars)</TableCell>
                <TableCell align="right">{data.coin.market_data.high_24h.ars}(ars)</TableCell>
                <TableCell align="right">{data.coin.market_data.low_24h.ars}(ars)</TableCell>
                <TableCell align="right">{data.coin.market_data.market_cap_change_24h_in_currency.ars}(ars)</TableCell>
              </TableRow>

              <TableRow key={data.coin.id}>
                <TableCell align="right">{data.coin.market_data.current_price.aud}(aud)</TableCell>
                <TableCell align="right">{data.coin.market_data.high_24h.aud}(aud)</TableCell>
                <TableCell align="right">{data.coin.market_data.low_24h.aud}(aud)</TableCell>
                <TableCell align="right">{data.coin.market_data.market_cap_change_24h_in_currency.aud}(aud)</TableCell>
              </TableRow>

              <TableRow key={data.coin.id}>
                <TableCell align="right">{data.coin.market_data.current_price.bch}(bch)</TableCell>
                <TableCell align="right">{data.coin.market_data.high_24h.bch}(bch)</TableCell>
                <TableCell align="right">{data.coin.market_data.low_24h.bch}(bch)</TableCell>
                <TableCell align="right">{data.coin.market_data.market_cap_change_24h_in_currency.bch}(bch)</TableCell>
              </TableRow>

              <TableRow key={data.coin.id}>
                <TableCell align="right">{data.coin.market_data.current_price.bdt}(bdt)</TableCell>
                <TableCell align="right">{data.coin.market_data.high_24h.bdt}(bdt)</TableCell>
                <TableCell align="right">{data.coin.market_data.low_24h.bdt}(bdt)</TableCell>
                <TableCell align="right">{data.coin.market_data.market_cap_change_24h_in_currency.bdt}(bdt)</TableCell>
              </TableRow>

               <TableRow key={data.coin.id}>
                <TableCell align="right">{data.coin.market_data.current_price.bhd}(bhd)</TableCell>
                <TableCell align="right">{data.coin.market_data.high_24h.bhd}(bhd)</TableCell>
                <TableCell align="right">{data.coin.market_data.low_24h.bhd}(bhd)</TableCell>
                <TableCell align="right">{data.coin.market_data.market_cap_change_24h_in_currency.bhd}(bhd)</TableCell>
              </TableRow>

              <TableRow key={data.coin.id}>
                <TableCell align="right">{data.coin.market_data.current_price.brl}(brl)</TableCell>
                <TableCell align="right">{data.coin.market_data.high_24h.brl}(brl)</TableCell>
                <TableCell align="right">{data.coin.market_data.low_24h.brl}(brl)</TableCell>
                <TableCell align="right">{data.coin.market_data.market_cap_change_24h_in_currency.brl}(brl)</TableCell>
              </TableRow>

              <TableRow key={data.coin.id}>
                <TableCell align="right">{data.coin.market_data.current_price.usd}(usd)</TableCell>
                <TableCell align="right">{data.coin.market_data.high_24h.usd}(usd)</TableCell>
                <TableCell align="right">{data.coin.market_data.low_24h.usd}(usd)</TableCell>
                <TableCell align="right">{data.coin.market_data.market_cap_change_24h_in_currency.usd}(usd)</TableCell>
              </TableRow>

              <TableRow key={data.coin.id}>
                <TableCell align="right">{data.coin.market_data.current_price.eur}(eur)</TableCell>
                <TableCell align="right">{data.coin.market_data.high_24h.eur}(eur)</TableCell>
                <TableCell align="right">{data.coin.market_data.low_24h.eur}(eur)</TableCell>
                <TableCell align="right">{data.coin.market_data.market_cap_change_24h_in_currency.eur}(eur)</TableCell>
              </TableRow>

          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}