import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import SaveTheBg from './images/savethedatebg.jpg';
import Leaf from './images/hesonehp.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <span className="copyrightLink">
        <Link href="mikeandmelyssawedding.com">Mike &amp; Mel</Link>{' '}
      </span>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  hundo: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  heroContent: {
    display: 'flex',
    flex: '1',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const heroStyle = {
  backgroundImage: `url(${SaveTheBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function English() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.hundo}>
          <AppBar position="relative">
            <Toolbar>
              <Grid
                justify="space-between" // Add it here :)
                container
                spacing={24}
              >
                <Grid item>
                  <Typography variant="h6" className={classes.title}>
                    MÉLYSSA &amp; MICHAEL
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to="/en" color="inherit">
                    <span className="tool-languages">English</span>
                  </Link>

                  <Link to="/fr" className="tool-languages" color="inherit">
                    <span className="tool-languages">French</span>
                  </Link>
                </Grid>
                {/* <Typography variant="h6" color="inherit" noWrap>
            MÉLYSSA &amp; MICHAEL
          </Typography>
          <Link to="/en" color="inherit">
            English
          </Link>
          <Link to="/fr " color="inherit">
            French
          </Link> */}
              </Grid>
            </Toolbar>
          </AppBar>
          {/* Hero unit */}
          <div style={heroStyle} className={classes.heroContent}>
            <Container maxWidth="sm">
              <img
                className="topLeaf"
                style={{ height: '150px' }}
                src={Leaf}
                alt="Leaf"
              />
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
                className="savethedate"
              >
                Save the date!
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
                className="savedate"
              >
                AUGUST 14, 2021
              </Typography>
              <img style={{ height: '150px' }} src={Leaf} alt="Leaf" />

              {/* <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div> */}
            </Container>
          </div>
        </div>
      </div>
      <div className="names">
        <Typography component="h3" variant="h2">
          Mélyssa Mckay-Nicole
          <br />
          <span className="smallAnd">and</span>
          <br />
          Michael Doseger
        </Typography>
      </div>
      <div className="story">
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid className="leftTitle" item xs={4}>
            <Typography component="h4" variant="h4">
              Our Story
            </Typography>
            <span className="storyDate">August 14, 2010</span>
          </Grid>
          <Grid item xs={4}>
            <span style={{ fontSize: '1.75em' }}>Story goes here</span>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid className="gridSpacer" item xs={12}></Grid>
          <Grid item xs={2}></Grid>
          <Grid className="leftTitle" item xs={4}>
            <Typography component="h4" variant="h4">
              The Proposal
            </Typography>
            <span className="storyDate">August 14, 2020</span>
          </Grid>
          <Grid item xs={4}>
            <span style={{ fontSize: '1.75em' }}>Story goes here</span>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
      <div></div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          We can't wait to celebrate with you!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <span className="footerSignature">Mélyssa &amp; Michael</span>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
