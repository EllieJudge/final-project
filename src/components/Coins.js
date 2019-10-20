import React, {Component} from 'react';
import { connect } from 'react-redux';//this connects THIS component to redux store
import { fetchCoins } from '../actions/coinActions';
import SimpleTable from './Table'; //Where our coins data is being mapped
import { InputBase, Button } from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'

let arrowP
let arrowN

const divStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px'
  };

const buttonName = {
    marginRight: '170px'
}

const buttonPrice = {
    marginLeft: '170px'
}


class Coins extends Component {
    state = {
        search: '',
        order: '',
        orderPrice: ''
    }


    //Wait for coins data before mounting
    componentDidMount() {
       console.log('before did mount');
       this.props.fetchCoins();
    }

    handleChange = (e) => {
        this.setState({
        search: e.target.value
        })
    }

    handleSort = () => {
        if (this.state.order === '') {
        this.setState({
            order: 'asc',
        })
            arrowN = <ArrowDropUp color="primary"/>
            arrowP = ''
        }
        else if (this.state.order === 'asc') {
            this.setState({
                order: 'des'
            })
            arrowN = <ArrowDropDown color="primary"/>
            arrowP = ''
        } 
        else {
            this.setState({
                order: ''
            })
            arrowN = ''
        } 
    }

    handleSortPrice = () => {
        if (this.state.orderPrice === '') {
            this.setState({
                orderPrice: 'asc'
            })
            arrowP = <ArrowDropUp color="primary"/>
            arrowN = ''
            }
            else if (this.state.orderPrice === 'asc') {
                this.setState({
                    orderPrice: 'des'
                })
                arrowP = <ArrowDropDown color="primary"/>
                arrowN = ''
            } 
            else {
                this.setState({
                    orderPrice: ''
                })
                arrowP = ''
            } 
    }

   render() {
       let coinItems = '';
       console.log('coin props values:', this.props.coinsProps);//coinsProps is our state TURNED INTO props by Redux magic
       
       if (this.props.coinsProps.data) { //if there is data...
                coinItems = 
                <SimpleTable //return this component with data fed into it
                data={this.props.coinsProps.data} search={this.state.search} order={this.state.order}
                orderPrice={this.state.orderPrice}
                />                  
       } else {
           coinItems = <div>Loading Bitcoins... </div>
       }
       console.log(this.props); //else return coinItems = loading...

       const search = this.state.search//sets the value as empty string/state
       return ( 
           <div>
                <div style={divStyle}>
                    <InputBase input type='text' value={search} onChange={this.handleChange} placeholder='Search...' />
                </div>
                    <h3>Top 100 Bitcoins from Coin Gecko!</h3>
                <Button style={buttonName} onClick={this.handleSort}>Sort by Name {arrowN}</Button>
                <Button style={buttonPrice} onClick={this.handleSortPrice}>Sort by Price {arrowP}</Button>
                {coinItems} 
           </div>
       );
   }
}
//This turns our state into props we can use throughout the app
const mapStateToProps = state => ({
   coinsProps: state.coins.items
})

//This connects react to redux
export default connect(mapStateToProps, { fetchCoins } )(Coins);
