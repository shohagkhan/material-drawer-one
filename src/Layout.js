import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Container, Grid } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
const useStyle = makeStyles((theme) => ({
   drawerPaper: { width: 'inherit' },
   link: {
      textDecoration: "none",
      color: theme.palette.text.primary
   }
}))


export default function Layout() {
   const classes = useStyle();
   return (
      <div>
         <Router>
            <div style={{ display: "flex" }}>
               <Drawer
                  style={{ width: '300px' }}
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
                     <Container fluid>
                        My Text
                     <Typography variant="h3" gutterBottom>
                           Home
                     </Typography>
                     </Container>
                  </Route>
                  <Route exact path="/about">
                     <Grid container spacing={2}>
                        <Grid item md={6}>
                           <Typography h2>
                              I am the about page Title one
                           </Typography>
                        </Grid>
                        <Grid item md={6}>
                           <Typography h2>
                              I am the about page Title one
                           </Typography>
                        </Grid>
                     </Grid>
                  </Route>
               </Switch>
            </div>
         </Router>
      </div>
   )
}
