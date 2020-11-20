import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { useHistory } from "react-router-dom";

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

const BlogListItem = (props) => {
    console.log(props);
    const classes = useStyles();
    let history = useHistory();

    return (
    <Card elevation={2} className={classes.root}>
    <CardHeader
        title={props.blogTitle}
      />
      <CardContent>
        <img src={require('../../../public/blog-images/' + props.blogImage)} alt="Post" />
        <Typography variant="body2" component="p">
        {props.blogText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => history.push('/post/' + props.id)}>Learn More</Button>
        <Typography className={classes.cardHeader} color="textSecondary" gutterBottom>
          {props.postedOn}
        </Typography>
      </CardActions>
    </Card>
    )
};

export default BlogListItem;