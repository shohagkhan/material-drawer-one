import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
const useStyle = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary
  }
}))

function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex" }}>
          <Drawer
            style={{ width: '220px' }}
            variant='persistent'
            anchor='left'
            open={true}
            classes={{ paper: classes.drawerPaper }}

          >
            <List>
              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText>
                    Home
                  </ListItemText>
                </ListItem>
              </Link>
              {/* --- */}
              <Link to="/about" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText>
                    About
                  </ListItemText>
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route exact path="/about">
              About
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
