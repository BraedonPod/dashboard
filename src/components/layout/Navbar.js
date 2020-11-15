import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';
import BugReportIcon from '@material-ui/icons/BugReport';
import HelpIcon from '@material-ui/icons/Help';
import MailIcon from '@material-ui/icons/Mail';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
        backgroundColor: '#1a2430'
    },
    button: {
      color: 'white'
    },
    title: {
      flexGrow: 1,
    },
    text: {
      color: 'white'
    },
    pos: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'monospace',
        marginBottom: 20,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto"
    },
    divider: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    listItem: {
        display: 'block',
        textAlign: 'center',
    },
    navitems: {
        color: 'rgb(169, 169, 169)',
        fontFamily: 'monospace',
        fontSize: 16,
    },
    link: {
        textDecoration: 'none',
    },
    listLink: {
        '&:hover' : {
            backgroundColor: '#0d1219',
            paddingLeft: 40,
        },
    },
    active: {
      '& li': {
        backgroundColor: '#0d1219',
        paddingLeft: 40,
      },
    }
  }));


function Navbar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Dashboard" className={classes.text} />
              <ListItemText className={classes.pos} >
                <small>Navigation</small>
              </ListItemText>
            </ListItem>
        </List>
        <Divider className={classes.divider} />
        {/* Make array */}
        <List>
            <NavLink exact to="/" activeClassName={classes.active} className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" className={classes.navitems} />
                </ListItem>
            </NavLink>
            <NavLink to="/earthquake" activeClassName={classes.active} className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <PublicIcon />
                </ListItemIcon>
                <ListItemText primary="Earthquake" className={classes.navitems} />
                </ListItem>
            </NavLink>
            <NavLink to="/covid" activeClassName={classes.active} className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <BugReportIcon />
                </ListItemIcon>
                <ListItemText primary="Covid" className={classes.navitems} />
                </ListItem>
            </NavLink>
            <NavLink to="/about" activeClassName={classes.active} className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="About" className={classes.navitems} />
                </ListItem>
            </NavLink>
            <NavLink to="/contact" activeClassName={classes.active} className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="contact" className={classes.navitems} />
                </ListItem>
            </NavLink>
            <Divider />
            <NavLink to="/test" activeClassName={classes.active} className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <WarningIcon />
                </ListItemIcon>
                <ListItemText primary="Test" className={classes.navitems} />
                </ListItem>
            </NavLink>
        </List>
      </div>
    );

    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className={classes.button} /></Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Typography variant="h6" className={classes.title}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar
