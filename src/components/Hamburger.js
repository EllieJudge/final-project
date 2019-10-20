import React from 'react';
import { Menu, Star, MonetizationOn } from '@material-ui/icons';
import { ListItemIcon, ListItemText, SwipeableDrawer, makeStyles, Divider, List } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

//NEEDS WORK
const useStyles = makeStyles({
    list: {
      width: 250,
      display: 'flex',
      flexDirection: 'column'
      
    },
    links: {
      textDecoration: 'none',
      marginLeft: '40%',
    }
  });
  
  export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false
    });
  
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [side]: open });
      };

      const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List  className={classes.list}  >
            {['Home', 'Favourites', 'About'].map((text, index) => (
                <NavLink to={'/' + text} key={text} className={classes.links} >
                <ListItemIcon>{index % 2 === 0 ? <MonetizationOn /> : <Star />}</ListItemIcon>
                <ListItemText primary={text} />
            </NavLink>
            ))}
          </List>
          <Divider />
        </div>
      );
      return (
        <div>
          <Menu onClick={toggleDrawer('left', true)} />
          <SwipeableDrawer
            open={state.left}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}>
            {sideList('left')}
          </SwipeableDrawer>
        </div>
      );
    }
    
