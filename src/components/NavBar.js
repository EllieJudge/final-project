import React from 'react';
import '../index.css';
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import SwipeableTemporaryDrawer from './Hamburger';

const divStyle = {
   padding: '20px'
  };


class Navbar extends React.Component {
    render(){
        return(
            <div>
                <AppBar position="static">
                    <Toolbar title="Crypto-App">
                        <div>
                            <SwipeableTemporaryDrawer />
                        </div>
                        <div>
                        <Typography variant="h6" style={divStyle}>Crypto-App</Typography>
                        </div>
                        
                    </Toolbar>       
                </AppBar>
            </div>
        )
    }
}
export default Navbar;
