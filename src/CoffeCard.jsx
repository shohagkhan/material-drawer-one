import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
   root: {

   },
   bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
});

export default function CoffeCard(props) {
   const classes = useStyles();
   const { avatarUrl, title, subtitle, imageUrl, description } = props;

   return (
      <Card>
         <CardHeader
            avatar={
               <Avatar src={avatarUrl}>
                  <ShareIcon />
               </Avatar>
            }
            action={
               <IconButton aria-label="">
                  <ShareIcon />
               </IconButton>
            }
            title={title}
            subheader={subtitle}

         />
         <CardMedia
            style={{ height: '150px' }}
            image={imageUrl}
         />
         <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
               {description}
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">Learn More</Button>
         </CardActions>
      </Card>
   );
}
