import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from "@material-ui/core/Divider";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
    root: {
      maxWidth: '50%',
      '@media (max-width: 768px)': {
        maxWidth: '90%',
      },
      color: 'white',
      backgroundColor: '#1a2430',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 100,
      padding: 20,
    },
    typography: {
        marginBottom: 13,
        textAlign: 'left',
    },
    p: {
        margin: 2
    }
  });

function Index() {
    const classes = useStyles();

    return (
        <>
            <div className="container">
                <Card className={classes.root}>
                    <CardHeader title="About"  subheader="Earthquakes / Covid / And many more!" />
                    <Divider />
                    <CardContent>
                        <Typography variant="body2" component="p" className={classes.typography}>
                            <h3>Application Info</h3>
                            Version 0.0.1
                            <p className={classes.p}>This application is open source at</p>
                            <Link href="https://github.com/BraedonPod/dashboard">https://github.com/BraedonPod/dashboard</Link>

                            <h3>API</h3>
                            <p className={classes.p}><Link href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php">Earthquake USGS</Link> - Earthquake API</p>
                            <p className={classes.p}><Link href="https://covid19.mathdro.id/api">mathdro</Link> - Covid API Total/Per Country</p>
                            <p className={classes.p}><Link href="https://api.covidtracking.com/v1/us/daily.json">CovidTracking</Link> - Covid API Daily US Cases</p>

                            <h3>Libraries & Resources</h3>
                            <p className={classes.p}><Link href="#">React.js</Link> - Frontend Framework</p>
                            <p className={classes.p}><Link href="#">React-Countup</Link> - Counting Animation</p>
                            <p className={classes.p}><Link href="#">React-Chartjs-2</Link> - Charts</p>
                            <p className={classes.p}><Link href="#">React-Router-Dom</Link> - App Navigation</p>
                            <p className={classes.p}><Link href="#">Axios</Link> - Get Requests</p>
                            <p className={classes.p}><Link href="#">Material-io</Link> - Design</p>
                            <p className={classes.p}><Link href="#">Leaflet</Link> - Map</p>
                            <p className={classes.p}><Link href="#">Moment</Link> - Date/Time format</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Index
