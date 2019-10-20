import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TableRow, TableHead, TableCell, Table} from '@material-ui/core'
import  Card  from '../components/Card';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import DenseTable from '../components/MoreInfoTable';

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    margin: '15%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    marginBottom: 10
  },
  table: {
    minWidth: 650,
  },
  bold: {
      fontSize: '30px',
      fontWeight: 'bold'
  },
  header: {
    fontStyle: 'inherit',
    marginLeft: '35%',
    marginTop: '0px',
    marginBottom: '0px',
  },
  spin: {
    height: '80px',
    width: '80px',
},
cardContainer: {
  // backgroundColor: 'green',
  display: 'flex',
  justifyContent: 'center',
  // flexDirection: "row"
 // position: 'center'
 flexGrow: 1
},
card: {
  // backgroundColor: 'yellow',
  borderRadius: 50,
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10
},



}))


const CoinInfo = (props) => {
  const classes = useStyles();

  //use location to get props from a link tag
  console.log("test", props.location.aboutCoinProps)
  let aboutCoin = props.location.aboutCoinProps;
return (
  <div>
     {/* HEAD OF PAGE - COIN NAME PLUS IMAGE */}
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow> 
            <TableCell align="right" className={classes.bold}>{aboutCoin.coin.name}</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"><img className={classes.spin} src={aboutCoin.coin.image.large} alt={aboutCoin.coin.image.small}></img></TableCell>
          </TableRow>
        </TableHead>
        </Table>
    </Paper>

  {/* THREE CARDS */}
    <div className={classes.cardContainer}> 
          <div className={classes.card}>
              <Card2 data={aboutCoin}/>
          </div>
          <div className={classes.card}>
              <Card data={aboutCoin}/>
          </div>
          <div className={classes.card}>
              <Card3 data={aboutCoin}/>  
          </div>
    </div>

    {/* DENSE TABLE */}
    <div>
      <DenseTable data={aboutCoin} />
    </div>

    </div>
  );
}

export default CoinInfo;