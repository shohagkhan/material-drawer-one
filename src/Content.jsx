import React from 'react'
import CoffeCard from './CoffeCard'
import Grid from '@material-ui/core/Grid'
import coffeMakerList from "./data";

export const Content = () => {
   const getCoffeMakerCard = coffeMakerObj => {
      return (
         <Grid item xs={12} sm={4}>
            <CoffeCard {...coffeMakerObj} />
         </Grid>
      );
   };

   return (
      <Grid container spacing={2}>
         {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
      </Grid>
   );
};