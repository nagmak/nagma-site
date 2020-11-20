import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginLeft: '25%',
        marginRight: '25%',
        marginBottom: '24px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
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
    paperRoot: {
      backgroundColor: '#fdfcfa',
  },
  cardHeader: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: 'unset',
}
  }));

function BlogPost() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    let date = new Date().toLocaleString();

    return (
    <Card elevation={2} className={classes.root}>
    <CardHeader
        title="Shrimp and Chorizo Paella"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Typography className={classes.cardHeader} color="textSecondary" gutterBottom>
          {date}
        </Typography>
      </CardActions>
    </Card>
    )
}

export default BlogPost;