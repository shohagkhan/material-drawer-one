import React from 'react';
import './App.css';

import {makeStyles} from '@material-ui/core/styles'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Drawer } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' }
}))

function App() {
  const classes = useStyle();
  return (
    <div className="App">
        <Router>
          <div style={{display: "flex"}}>
            <Drawer
              style={{width: '220px'}}
              variant = 'persistent'
              anchor = 'left'
              open = {true}
              classes = {{paper: classes.drawerPaper}}

            >
              
            </Drawer>
          </div>
        </Router>
    </div>
  );
}

export default App;
