import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import blogPost from '../../mock-data/blog.json';
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

const BlogPost = (props) => {
    console.log(props);
    const classes = useStyles();
    let history = useHistory();

    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle : "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText: ""
    });

    const [slug, setSlug] = useState('');

    useEffect(() => {
        const slug = props.match.params.slug;
        const post = blogPost.data.find(post => post.id.toString() === slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    if(post && (post.blogImage === "" || !post.blogImage)) return null;

    const postText = post.blogText.map(function(text, index) {
        return (
            <p key={ index }>
                {text}
            </p>
        )
    });

    return (
        <Card elevation={2} className={classes.root}>
        <CardHeader
            title={post.blogTitle}
            key={`${post.blogTitle}--${slug}`}
        />
        <CardContent>
            <img src={require('../../../public/blog-images/' + post.blogImage)} alt="Post" />
            <Typography variant="body2" component="p">
            {postText}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => history.push('/blog/')}>Return to Blog</Button>
            <Typography className={classes.cardHeader} color="textSecondary" gutterBottom>
            {post.postedOn}
            </Typography>
        </CardActions>
        </Card>
    )
}

export default BlogPost;