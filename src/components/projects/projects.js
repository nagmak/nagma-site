import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 480,
    margin: 100
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src="https://www.etftrends.com/wp-content/uploads/2019/06/VGT-ETF-Down-On-Tech-Stock-Woes.jpg" alt="tech" height="auto" style={{ maxWidth: '100%', borderRadius: 0 }}></img>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src="https://www.etftrends.com/wp-content/uploads/2019/06/VGT-ETF-Down-On-Tech-Stock-Woes.jpg" alt="tech" height="auto" style={{ maxWidth: '100%', borderRadius: 0 }}></img>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
