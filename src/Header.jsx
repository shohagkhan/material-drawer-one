import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
   typographyStyle: {
      flex: 1
   }
});

export const Header = () => {
   const classes = useStyle()
   return (
      <div>
         <AppBar position="static" color="primary">
            <Toolbar>
               <Typography variant="h6" className={classes.typographyStyle}>
                  Hei, I am the AppBar
             </Typography>
               <AcUnitIcon />
            </Toolbar>
         </AppBar>
      </div>
   )
}
