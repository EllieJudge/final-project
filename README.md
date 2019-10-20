Coins Draft:

import React, {Component} from 'react';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import {connect} from 'react-redux';
import {fetchCoins} from '../actions/coinActions';
import {makeStyles} from '@material-ui/core/styles';

class Coins extends Component {
    //LIFECYCLE METHOD - WAIT FOR THIS DATA
    componentDidMount(){
        console.log('before did mount')
        this.props.fetchCoins(); //calling fetch coins (fetch coins is now props)
    }
    render(){
        //js always goes in render
        console.log(this.props.coinsProps)
        let coinItems = '';
        if(this.props.coinsProps.data) {
           coinItems = this.props.coinsProps.data.map( coin => (
              <TableRow key={coin.id} >
                 <TableCell component="th" scope="row">{coin.name}</TableCell>
                 <TableCell align="right"><img src={coin.image.thumb} alt={coin.image.small}></img></TableCell>
                 <TableCell align="right">£{coin.market_data.current_price.gbp}</TableCell>
                 <TableCell align="right">€{coin.market_data.current_price.eur}</TableCell>
                 <TableCell align="right">{coin.symbol}</TableCell>
                 <TableCell align="right">£{coin.market_data.market_cap.gbp}</TableCell>
             </TableRow> 
         ))
        } else {
            coinItems = 'Loading Bitcoins...'
        }
          
        return (
  
          <div>{coinItems}</div>
        )
    }  
  }

//this sends the state from the actions and reducers and converts it into props so can be 
//used anywhere within the app (as props)
const mapStateToProps = state => ({
    coinsProps: state.coins.items //state coins coming from root/main reducers (same name!)
})

//exporting it and CONNECTING everything (these things) to redux, VERY IMPORTANT!!!
export default connect(mapStateToProps, { fetchCoins })(Coins) //and exporting Coins component










































This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
