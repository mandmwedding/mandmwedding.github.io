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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SaveTheBg from './images/savethedatebg.jpg';
import Leaf from './images/hesonehp.png';
import { useLocation } from "react-router-dom";
import Home from './french/Home'
import Location from './french/Location';
import Schedule from './french/Schedule';
import FAQ from './french/FAQ';
import RSVP from './french/RSVP'
import { Menu, useMediaQuery, MenuItem } from '@material-ui/core';
import { AccessTimeOutlined, ImportantDevices } from '@material-ui/icons';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

import HomeIcon from '@material-ui/icons/Home';
import TextsmsIcon from '@material-ui/icons/Textsms';
import LanguageIcon from '@material-ui/icons/Language';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';


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
    textAlign: 'left !important',
    flexGrow: 1,
    color: 'white !important',
    '&:hover': {
      color: '#ffefee !important',
    },
  },
}));

const heroStyle = {
  backgroundImage: `url(${SaveTheBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const French = (props) => {
  const { history } = props;
  const classes = useStyles();
 
  const { search } = useLocation();
  const match = search.match(/page=(.*)/);
  const type = match?.[1];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.hundo}>
          <AppBar position="relative">
            <Toolbar>
                  <Typography variant="h6"
                  className={classes.title}
                  component={Link}
                  to="/">
                    MÉLYSSA &amp; MICHAEL
                  </Typography>
                {!isMobile ? (<span>
                  <Link to="/fr?page=home" color="inherit">
                    <span className="tool-languages">Home</span>
                  </Link>
                  <Link to="/fr?page=faq" color="inherit">
                    <span className="tool-languages">FAQ</span>
                  </Link>
                  <Link to="/fr?page=schedule" color="inherit">
                    <span className="tool-languages">Horaire</span>
                  </Link>
                  {/* <Link to="/fr?page=location" color="inherit">
                    <span className="tool-languages">Location</span>
                  </Link> */}
                  <Link to="/fr?page=rsvp" color="inherit">
                    <span className="tool-languages">RSVP</span>
                  </Link>
                  <Link to="/en" color="inherit">
                    <span className="tool-languages">English</span>
                  </Link></span>
                ) : (<span><IconButton
                              edge="start"
                              className={classes.menuButton}
                              color="inherit"
                              aria-label="menu"
                              onClick={handleMenu}
                            >
                              <MenuIcon />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical:  "top",
                          horizontal: "right"
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical:  "top",
                          horizontal: "right"
                        }}
                        open={open}
                        onClose={handleClose}
                        >
                          <MenuItem onClick={() => handleMenuClick('/fr?page=home')}><HomeIcon/>&nbsp; &nbsp;Home</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/fr?page=faq')}><TextsmsIcon/>&nbsp; &nbsp;FAQ</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/fr?page=schedule')}><AccessTimeIcon/>&nbsp; &nbsp;Horaire</MenuItem>
                          {/* <MenuItem onClick={() => handleMenuClick('/fr?page=location')}><LocationOnIcon/>&nbsp; &nbsp;Location</MenuItem> */}
                          <MenuItem onClick={() => handleMenuClick('/fr?page=rsvp')}><MailIcon/>&nbsp; &nbsp; RSVP</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/en')}><LanguageIcon/>&nbsp; &nbsp;English</MenuItem>
                        </Menu></span>)}
                
                {/* <Typography variant="h6" color="inherit" noWrap>
                  MÉLYSSA &amp; MICHAEL
                </Typography>
                <Link to="/en" color="inherit">
                  English
                </Link>
                <Link to="/fr " color="inherit">
                  French
                </Link> */}
              {/* </Grid> */}
            </Toolbar>
          </AppBar>
          {/* Hero unit @@@make only appear on home page*/}
          {type === 'faq' && <FAQ />}
          {type === 'schedule' && <Schedule />}
          {type === 'location' && <Location />}
          {type === 'rsvp' && <RSVP />}
          {(type === 'home' || type === undefined)&& <div style={heroStyle} className={classes.heroContent}>
            <Container maxWidth="sm">

              <Typography
                component="h1"
                variant="h2"
                align="center"
                gutterBottom
                className="savethedate"
              >
                <span style={{ color: 'white' }}>RÉSERVEZ LA DATE!</span>
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
                className="savedate"
              >
                <span style={{ color: 'white' }}>13 AOÛT 2022</span>
              </Typography>
              

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
          </div>}
        </div>
      </div>

      {(type === 'home' || type === undefined)&& <Home />}
      <div></div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          <span style={{ fontSize: '1.5rem'}}>Nous avons hâte de célébrer avec vous!</span>
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

export default withRouter(French);