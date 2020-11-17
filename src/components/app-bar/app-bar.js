import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './app-bar.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className="toolbar">
          <Typography variant="h6" className={classes.title}><Link to='/' className={classes.title}><div className="english-text">Nagma Kapoor</div>|<div className="hindi-text">नगमा कपूर</div></Link></Typography>
          <Button color="inherit" className="btn-toolbar"><Link to='/'>Home</Link></Button>
          <Button color="inherit" className="btn-toolbar"><Link to='/about'>About</Link></Button>
          {/* <Button color="inherit"><Link to='/blog'>Blog</Link></Button> */}
          {/* <Button color="inherit"><a href="https://www.instagram.com/notnagma/">Gallery</a></Button> */}
          <Button color="inherit" className="btn-toolbar"><a href="https://www.goodreads.com/review/list/51938230-nagma-k?shelf=read">Bookshelf</a></Button>
          <Button color="inherit" className="btn-toolbar">Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}