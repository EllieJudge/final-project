import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Coins from './components/Coins';
import NavBar from './components/NavBar';

//ROUTES
import { BrowserRouter, Route } from 'react-router-dom';

//IMPORT PAGES
import About from './pages/About';
import CoinInfo from './pages/CoinInfo';
import Favourites from './pages/Favourites';

//WRAP EVERYTHING IN PROVIDER - ADD STORE
class App extends Component {
  render() {
    return (
      <Provider store={store}> 
      <BrowserRouter>
          <div className="App">
            <NavBar />
                <Route exact path='/' render={() => <Coins />} />
                <Route path = '/Home' render = {() =>  <Coins />} />
                <Route path='/About' component={About} />
                <Route path = '/Favourites' component={Favourites} />
                <Route path='/CoinInfo' component={CoinInfo} />	
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
  }  


export default App;
