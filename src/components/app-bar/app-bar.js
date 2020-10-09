import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './app-bar.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
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
          <img src="nagmacartoon2.JPG" alt="Nagma"/>
          <Typography variant="h6" className={classes.title}>Nagma Kapoor</Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit"><a href="https://www.instagram.com/notnagma/">Gallery</a></Button>
          <Button color="inherit">Bookshelf</Button>
          <Button color="inherit">Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}